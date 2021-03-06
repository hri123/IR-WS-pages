(function() {


/*

<h4>Reading Materials</h4>
<div>Learning JavaScript Design Patterns - A book by Addy Osmani - Volume 1.6.2</div>
<div>https://www.safaribooksonline.com/library/view/learning-path-on/9781491959169/</div>


Libraries:

Big Words Details

Dojo
jQuery
Description: jQuery abstracts and standardises the way to access DOM elements. The standardizations is because it uses the same pattern CSS Selectors uses. If you can understand the CSS selectors, you will know how to access DOM elements in jQuery.
jQuery Plugins
Angular
Gulp
Gulp is a task/build runner for development. It allows you to do a lot of stuff within your development workflow. You can compile sass files, uglify and compress js files and much more. The kicker for gulp is that its a streaming build system which doesn't write temp files. It's like Pipes in bash. One task flow into another. Gulp could be compared to Grunt in its usage. 
Grunt
Gradle
Bluebird
http://zpalexander.com/blog/javascript-promises-node-js/


Debugging:

Tips

debug javascript which is inside a jsp page - add the magic word debugger in the script inside the jsp and load; the chrome debugger will stop in that line (http://stackoverflow.com/a/14902310/512126)




Testing:

it is very important that we can isolate the unit of code under test. That is because when we are testing the sort function we don't want to be forced into creating related pieces such as the DOM elements, or making any XHR calls to fetch the data to sort.
the developers often mix concerns resulting in a piece of code which does everything. It makes an XHR request, it sorts the response data and then it manipulates the DOM.


The unit tests for code (using Angular) is written in Jasmine.
Karma test runner is used to run the unit tests.
Protractor is used to run the end to end tests


$. PhantomJS / CasperJS (Smoke Testing)
https://www.youtube.com/watch?v=mK0l__jmpTA&index=19&list=WL

Screenshots:
http://blog.ruilopes.com/post/83310747361/taking-web-application-screenshots-with-casperjs
http://fcargoet.evolix.net/2012/01/use-phantomjs-to-take-screenshots-of-you-webapp-for-you/
(helps in taking screenshots while TVT / GVT / localization / translation / globalization testing)


PhantomJS vs Selenium
http://stackoverflow.com/questions/14099770/casperjs-phantomjs-vs-selenium

$. Visual Regression Tools: Image Magick, PhantomCSS, Wraith, Hardy, SiteEffect.io

Huxley is a test-like system for catching visual regressions in Web applications. It was built by Pete Hunt with input from Maykel Loomans at Instagram.
https://github.com/facebook/huxley

$. Other testing frameworks:
http://phantomjs.org/headless-testing.html
https://www.npmjs.org/package/huxley

$. Doh testing:

To run dojo's doh tests:

Download "dojo-release-1.8.5-src". Under the util directory there is util directory and under than doh directory.
http://localhost:1085/reportsScheduler/dojoDemo/util/doh/runner.html

To run from command line:
http://www.artificialworlds.net/blog/2012/10/09/running-dojo-doh-unit-tests-on-the-command-line-with-rhino/

To run custom tests:
(http://kevinandre.com/dev/jsunittest-amd-doh-1/; http://dojotoolkit.org/reference-guide/1.9/util/doh.html)

http://localhost:1085/reportsScheduler/dojoDemo/util/doh/runner.html?test=/reportsScheduler/dojoDemo/myTests/firstTest.js

firstTest.js:

define(["doh/runner"], function(doh) {
    doh.register("DOH Methods", [
        function assertTrueTest() {
            doh.assertTrue(true);
            doh.assertFalse(false);
            doh.assertEqual("Kevin", String('Kevin'));
            doh.assertNotEqual("Kevin A", String('Kevin A'));
        }
    ]);
});

http://localhost:1085/reportsScheduler/dojoDemo/util/doh/runner.html?paths=dojoDemo/myTests,../../../reportsScheduler/dojoDemo/myTests&test=/reportsScheduler/dojoDemo/myTests/secondTest.js

Employee.js and secondTest.js

define(["dojo/_base/declare"], function(declare){
    return declare("dojoDemo.myTests.Employee", null, {
        constructor: function(firstname, lastname, title){
            this.firstname = firstname;
            this.lastname = lastname;
            this.title = title;
        },
        fullname: function(){
            return this.firstname + " " + this.lastname;
        },
        speak: function(){
            return "(" + this.title + ") " + this.firstname + " says hello!";
        }
    });
});

define(["doh/runner", "dojoDemo/myTests/Employee"], function(doh, Employee) {
    doh.register("My Employee Test", {
        "should return the employee's name":{
            setUp:function () {
                this.employee = new Employee("Kevin", "Armstrong", "Developer");
            },
            runTest: function(){
                doh.assertEqual("Kevin", this.employee.firstname);
                doh.assertEqual("Armstrong", this.employee.lastname);
                doh.assertEqual("Kevin Armstrong", this.employee.fullname(), "Fullname should be 'firstname lastname'");
            }
        },
        "should return what the employee said":{
            setUp:function () {
                this.employee = new Employee("John", "Doe", "President");
            },
            runTest: function(){
                doh.assertEqual("(President) John says hello!", this.employee.speak());
            }
        }
    });
});


*/


/*

Big Words

Frameworks: dojo, angularjs, aurelia
jQuery
debugging
Responsive Design
CSS
Testing
Cross Doman (XSS)
MVC, MVVM, MVP, etc
HTML5
ES6
ReactJS
Express - Koa - generators - callbacks - promises
Minification (UglifyJS)
Dependency Management - AMD / modules / lazy loading
mixin, prototypal inheritance, prototype (dojo syntax for inheritance, internals how inheritance implemented in dojo)
functions are first-class objects (passed as arguments to functions, created within functions, and returned from functions)
AJAX - Deferreds / Promises - How do you convert an asynchronous method call into a synchronous method call
Websockets / long polling
SVG
Execution Context (Variable Env), syntax parser, Lexical environment
Hoisting
undefined
memory space
single threaded synchronous execution
execution stack
scope chain
outer environment
javascript engine
Events / event loop - sync js - event queue is checked when execution context stack is empty
closure - dojo hitch / partial - passing arguments to a callback / custom parameters to event handlers
selectors - jQuery - css selectors, find method vs Dojo uses dojo.byId, dijit.byId, dojo.query
dynamic typing, coercion
cookie
oauth



Big Words Details

Dependency Management - Link1

Best Practices


Externalizing strings
Showing error / exceptions
JavaScript / Dojo - Interview

1. JavaScript internals are what is critical here, understand the JavaScript language features and design patterns.
2. Some internals of Dojo are explained in the book - Mastering Dojo
3. Look at the files in the Tech folder under Dojo
4. Look at some of the URLs in the chrome browser under Dojo
5. http://www.slideshare.net/yoavrubin/introduction-to-dojo and other slide decks in slideshare
6. Widget lifecycle
http://dojotoolkit.org/documentation/tutorials/1.8/understanding_widgetbase/
http://dojotoolkit.org/documentation/tutorials/1.6/understanding_widget/
http://dojotoolkit.org/reference-guide/1.7/dijit/_WidgetBase.html
7. Private variable in javascript : http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
8. From James Thomas
https://speakerdeck.com/jthomas/beyond-dojo-the-rise-of-asynchronous-module-definition-amd
https://speakerdeck.com/jthomas/optimising-your-dojo-application-using-the-dojo-build-system
https://speakerdeck.com/jthomas/javascript-anti-patterns-moving-from-java-to-javascript
9. Use SVG for icons in html. It is much faster than downloading images for icons.
10. http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/
11. 
Libraries / Utilities

PhantomJS - headless browser
CasperJS - Navigation utility for PhantomJS
BehaviourJS -  library for doing unobtrusive javascript using a combination of a CSS Selector library and some simple javascript. (http://stackoverflow.com/questions/11839883/how-to-use-dojo-behavior-on-dojo-widget)
RequireJS
JSMock
Tools

SublimeText, brackets.io - editor
javascriptlint, jslint - JS Errors
jsbeautifier - formatter
JDojo (jazz.net) - Code in Java and compile into JavaScript code
Misc

ScriptEngine (http://docs.oracle.com/javase/7/docs/technotes/guides/scripting/programmer_guide/)



*/

})();
