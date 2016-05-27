(function () {
    
/*


Big Words

Modular Java
Plugins (extensions & extension points)
Spring Dynamic Modules (DM)
Start Level
Logging


Interview Questions

a. module/component ?

b. bundles can be remotely installed, started, stopped, updated and uninstalled without requiring a reboot. The service registry allows bundles to detect the 
addition of new services, or the removal of services, and adapt accordingly.

c. target platform

d. The primary problem in OSGi environments is the handling of inter-bundle dependencies: one bundle referencing an object owned or created by another bundle.

e. advantage of bundles

f. (hot deployment)

g. Plugin:

h. OSGi - what is the sequence in which the plugins and services are started ?



Everyday Issues - Trivia

1. I launch the 'Application' from my eclipse workspace. And after around 10 - 15 minutes it is just terminated. I would not have pressed the terminate button. And the odd thing is there is no log. I dont think it is because of memory, because no such message gets printed. I am not sure if it is because of any timeout. I could not find any helpful answers on the internet too.
Soln:
It was the system.exit.... the issue was, in my launch, I was unintentionally selecting the JUnit test plugin and that had a system.exit somewhere. So, once the tests were run, it used to exit. I think since there was no log4j.properties associated with the test plugin, there was nothing on the console too....


2. Refresh Bundle:

"refresh" is not restarting the bundle - it would simply reload the java packages, probably via a new classloader - which would effectively cleanup any static references.

- this would be risky if you have other reports happening at the same time & you have instances with the old version of the class present in memory at that time.

I do not see this as an OSGi issue - it would not really matter if the BIRT plugins are in "ACTIVE" state or "RESOLVED"  - the BIRT plugins by themselves have no OSGi services.



import org.osgi.framework.Bundle;
import org.osgi.service.packageadmin.PackageAdmin;

import com....................util.OSGiServicesUtil;
import com....................service.Activator;


  } finally {
   Bundle omj= null;
   Bundle[] allBundles= Activator.getContext().getBundles();
   for (Bundle bundle : allBundles) {
    if (bundle.getSymbolicName().contains("org.mozilla.javascript")) {
     omj= bundle;
     break;
    }
   }

//            ServiceTracker packageAdminTracker = new ServiceTracker(omj.getBundleContext(), PackageAdmin.class.getName(), null);
//            packageAdminTracker.open();
//            PackageAdmin packageAdmin = (PackageAdmin) packageAdminTracker.getService();
//            packageAdmin.refreshPackages(new Bundle[]{omj});
//            packageAdminTracker.close();
    
            PackageAdmin packageAdmin = (PackageAdmin)OSGiServicesUtil.waitAndGetService(PackageAdmin.class,10000);
            packageAdmin.refreshPackages(new Bundle[] { omj });

3. When you need to depend on a jar which does not have OSGi specific manifest, use the 3rd option mentioned in this link - http://stackoverflow.com/a/12577606


Start Level




Bundle-Name: Spring3HibernateOSGi
Activator.java

  public void start(BundleContext bundleContext) throws Exception {
  
  
  ServiceReference ref = context.getServiceReference(HttpService.class.getName());


HttpService service is in
Bundle-SymbolicName: org.eclipse.osgi.services


the getServiceReference would throw the following exception:

Caused by: java.lang.NullPointerException: A null service reference is not allowed.
 at org.eclipse.osgi.framework.internal.core.BundleContextImpl.getService(BundleContextImpl.java:586)
 at spring3hibernateosgi.Activator.start(Activator.java:33)


This was because the getServiceReference was trying to get the service reference even before service - HttpService was registered (before the plugin containing the service HttpService was in active state)

So, the solution was two things,
move the getServiceReference from the start method to some other "init" method that gets called before the first request to this plugin is made



or change the start level of the Spring3HibernateOSGi plugin as in the below URL
http://eclipsesource.com/blogs/2009/06/10/osgi-and-start-levels/

When the start level in the Run Configurations popup for Spring3HibernateOSGi was changed to 5, higher than the osgi.services plugin, the exception went away.


Logger / Logging


Let us assume you want to log through the apache commons logging interface in your bundle

4 files in your target platform:

jcl-over-slf4j-1.5.5.jar - bundle with commons logging to simple logging facade (http://www.slf4j.org/apidocs/org/apache/commons/logging/package-summary.html)
slf4j-api-1.5.5.jar - bundle with simple logging facade api
slf4j-log4j12-1.5.5.jar - bundle that is a bridge between slf to log4j
log4j.osgi-1.2.15-SNAPSHOT.jar - bundled version of the log4j implementation

Now the main question is where do you place your log4j.properties:

You need to create another bundle fragment as below:


<img src="source/Java/images/bundleFragment.png" width="600" />


The Manifest.mf needs to contain the following:


Manifest-Version: 1.0
Bundle-RequiredExecutionEnvironment: J2SE-1.5
Bundle-SymbolicName: com.abc.datatools.perf.console.log4j
Bundle-ManifestVersion: 2
Created-By: 2.3 (ABC Corporation)
Bundle-Name: Log4j fragment
Bundle-Version: 1.0.0
Fragment-Host: org.springframework.osgi.log4j.osgi
Bundle-Vendor: ABC
Ant-Version: Apache Ant 1.7.0

org.springframework.osgi.log4j.osgi is actually the bundle symbolic name of the bundle log4j.osgi-1.2.15-SNAPSHOT.jar


Regular Enterprise Applications into ones that uses OSGi


Main:

1. I like the concept of OSGi, but how do I use it to build Web applications? http://www.javaworld.com/javaworld/jw-06-2008/jw-06-osgi3.html?page=1

Others:

1. http://shashivelur.com/blog/2009/01/osgi-for-web-applications/
2. http://forum.springsource.org/showthread.php?85161-Embedding-OSGi-in-web-applications

*/
    
    
})();