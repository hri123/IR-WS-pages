(function () {
    
/*


(Issue: Application-B client runs on desktop/client machine. When we launch it , there in an inbuilt jetty server which listens on a port (usually 56788) for incoming requests. We need to find out from Application-A console (DOJO/Javascript) if this client is up and running or not.)


From whatever I searched, it appears like there is no straight forward approach for cross domain javascript invocation. Following is my analysis:


The msdn article (http://msdn.microsoft.com/en-us/library/bb735305.aspx) link you mentioned is about how to make a SECURE cross domain request when you have control of both the host server and the external server. They do not discuss the case where you dont have access to both the servers. The security they are talking about is that, only the script from host server talks to the external server and no rogue script from some other third party tries to talk to the external server.
http://ternarylabs.com/2011/03/27/secure-cross-domain-iframe-communication/
http://sandbox.ternarylabs.com/porthole/
http://www.tomslabs.com/index.php/2012/06/iframes-and-javascript-cross-domain-security/


If you have control of both the servers there are even simpler ways available to make the cross domain communication secure.
e.g.: Let us say there are two domains A and B. If a script from domain A has to make a call to an URL from domain B, all that is required to setup the communication is for the response header from domain B to have entries:

Access-Control-Allow-Origin: http://foo.domainA.com
Access-Control-Allow-Methods: POST, GET, OPTIONS

More details about the above procedure is in the following URLs:
https://developer.mozilla.org/en/docs/HTTP/Access_control_CORS (Samples in - http://arunranga.com/examples/access-control/)
http://www.w3.org/TR/2008/WD-access-control-20080912/
http://stackoverflow.com/questions/tagged/cross-domain+dojo

Since we do not have access to the Application-B side, we are facing these issues.


Like mentioned earlier, there is another way to make cross domain invocation, it is called JSONP (JSON with padding), but the drawback for this is that, the result sent from the external server must be in JSONP format.

http://en.wikipedia.org/wiki/JSONP
https://dojotoolkit.org/documentation/tutorials/1.6/jsonp/
http://davidwalsh.name/jsonp
http://my.safaribooksonline.com/book/web-development/9780596516482/ajax-and-server-communication/cross-site_scripting_with_jsonp


One tweak was to invoke the external server from the host server (using php scripts) instead of the javascript. But, since the client may be outside/inside a firewall, the access may be denied.
 

Using iframes: Since iframe is like a completely different page, the executions on the original page and the new iframe somehow needs to be synced to get the data.
dojo.io.iframe.send is a dojo utility to create iframes and we have the same problem as above with it.


You might have seen that there are links of iphone and ipad apps on many web pages, when clicked actually open up the iTunes application installed on your machine. We need something similar to this. It seems this works on the concept of protocol handlers where these protocol handlers get added to the web browser when the iTunes application is installed.
http://stackoverflow.com/questions/1780211/how-does-the-apple-itunes-web-site-launch-the-itunes-application-on-my-computer


Now the question is how does it work with Flash Applications (Flex). The Adobe Flash Player contains a crossdomain security mechanism, similar to JavaScript’s Cross-Site Scripting restrictions. Just like in the case of Javascript, if the server servicing the cross domain request has entries of the domain sending requests to it, it allows.
Mostly for us, in the case of Application-B working for Flash, there may be an wildcard entry of the crossdomain.xml in the server of Application-B.
http://www.longtailvideo.com/support/jw-player/28844/crossdomain-file-loading/



We can continue to work on these tweaks, also see that since the server we are trying to access is localhost, there might be simpler ways than cross site communication.
In the meantime I think we need to discuss this issue with the Application-B team to see if there are simpler ways we might have missed out.
If there are none, then it will be better for Application-B to include the permissions for Application-A on their server installations.


Other References:
http://www.codeproject.com/Tips/610537/Browser-Cross-Domain-Explained
http://www.codeproject.com/Tips/585663/Communication-with-Cross-Domain-IFrame-A-Cross-Bro
http://www.ibm.com/developerworks/library/wa-crossdomaincomm/


New code for Application port check:
dojo.ready(function(){
 initialPort = 56788;
 varCount = 5;
 portIncrement = 3;
 checkFunc(initialPort);
});

function reportLoaded(data){
 varPort = initialPort;
}


function reportError(err){
 varCount--;
 
 if(varPort == "" && varCount>0)
 {
  initialPort = initialPort+portIncrement;
  checkFunc();
 }
 
 if(varPort == "" && varCount == 0)
 {
  initialPort = 56000;
  checkFunc();
 }
}
function checkFunc(){
    var ifrm = null;
    ifrm = document.createElement("IFRAME");
    ifrm.setAttribute("frameborder","0");
    ifrm.setAttribute("id","frameId");
    ifrm.style.width = "0%" ;
    ifrm.style.height = "0%" ;
    ifrm.setAttribute("src", "http://localhost:"+initialPort+"/dsdb/check");
    varPort = ""
 if (ifrm.addEventListener)
     //IE
  ifrm.addEventListener("load", reportLoaded, false);
 else
     //Other browsers
  if (ifrm.attachEvent)
   ifrm.attachEvent("onload", reportLoaded);
  else
   //Old IE versions
   if (ifrm.onLoad)
    ifrm.onLoad = reportLoaded;


    document.body.appendChild(ifrm);
    iframeError = setTimeout(reportError, 50);
}






http vs https (http://answers.yahoo.com/question/index?qid=20070604161212AAsnSFX)

http send everything you do in plan text for any one to read. 

https encrypts everything you do so that no one can read what you type but the recipient. 

The problem with encrypting data is that you cant just encrypt it and say only yahoo can read it. Both you and yahoo have to have a secret key so that yahoo can decrypt what you sent and encrypt private stuff for you to read. 

This is accomplised by an encryption scheme known as public key. Yahoo puts out a public key so that every one can encrypt stuff that only yahoo can read its like a one way key: you can package stuff up and send it to yahoo so that they can read it with theire private key but some one with a public key cant see what you encrypted. 

So you package up a key for yahoo to use to talk to you and you are all set. 

WHY ALL internet communication isn't done like this is because of what is known as the man in the middle attack, and its solution. 

It's quite simply to pretend to be yahoo.com if you know what you doing. so I pretend to be yahoo and all traffic you think is going to yahoo comes to me. you ask me for my public key I respond back with an fake public private key pair that I made then I ask yahoo for there public key and every thing you to I do I just watch for anything interesting like Credit cards etc, an you are non the wiser. 

We solved this problem by using what is called a certificate authority. A CA is some one who you pay to vouch for you; Verisign and GoDaddy are the biggest. So everytime you make a https connection to amazon you go to a CA and they comeback with amazons public key. And every thing is hunky doory. With the exception that this slowed you down considerable yahoo.com has to pay a CA bill every month, and joesmoh.com has to go through a lot of rigormarol to set all this up. 

And finally I will answer your question: 
So the reason is it would make every thing slow more expensive and more complicated to use exclusively https. 

Plus tying to get information from internet traffic once it is out of your local network is like trying to car jack someone on free way going 500 miles an hour. 


*/


})();