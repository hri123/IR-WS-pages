(function () {
    
/*


Dependency Injection
AOP
Internals of spring - dynamic proxies, post processing of byte code
Bean config




Tutorials:



Spring Developer Path


HowTos:

How does Spring framework work ?

1. Dependency Injection:

Reflection

2. AOP (and annotations)

Byte Code Manipulation
CGLib: http://cglib.sourceforge.net/
http://en.wikipedia.org/wiki/Javassist
http://asm.ow2.org/
JDK Dynamic Proxies (Proxy)

For a sample implementation - refer to http://code.google.com/p/gag/


Access the Spring-ApplicationContext from everywhere in your Application (...ContextAware)


When the spring configuration files are spread across multiple plugins, and it is the spring extender that loads the spring configuration files present in the Meta-inf/spring folder automatically, here is a way to get an handle to the bean:

http://blog.jdevelop.eu/2008/07/06/access-the-spring-applicationcontext-from-everywhere-in-your-application/
http://blog.jdevelop.eu/?p=154

//*****************************************************************
import org.osgi.framework.BundleContext;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.osgi.context.BundleContextAware;

public class DefaultBundleContextAwareBean implements BundleContextAware, ApplicationContextAware
{
    protected BundleContext bundleContext = null;
    protected ApplicationContext applicationContext = null;
//*****************************************************************


JEE / Spring Evolution



1. Servlet - HTTPServer Extension - dynamic content
No business layer separation
CGI/Perl - separate processes for each request - servlet default was one instance, multi threaded for multiple requests

2. Java beans with getter/setter, objects, encapsulation

3. To separate UI & Java Business layer, JSP was introduced

4. Separation of concern introduced
View layer - JSP, JS
Web layer - servlet
application layer - application logic

5. EJBs came, helped in
Transactions
Remoting
web services support
persistence
Threading
security
Session
Pooling
(imagine 100 users)

e.g.: Transactions
What happens if server gets stopped and started

synchronized reduceMoney() {

 conn.txbegin



 conn.txclose

 exception() {

  conn.txrollback

 }
}

1. Entity Beans
1.1. Container managed persistence
1.2. Bean managed persistence

EJB is standard.
Vendor independent.


6. Spring came
Application container / EJB container had to be loaded for EJB, no application server required for spring
non intrusive transaction management
Entity beans make application slower
Eliminate complexity of EJB APIs, use whatever you want as a POJO, decouple progamming model from the server infrastructure
AOP better than JEE interceptors

Dependency Injection, Inversion of Control
The container gets the control
you dont call me, I will call you
Also DI leads to high cohesion, low coupling

All components (controller, service, repository) are POJO in Spring
POJOs can be unit tested easily and independently.

*/    
    
})();
