(function () {
    
/*

Maven


1. What is Maven
http://viralpatel.net/blogs/introduction-apache-maven-build-framework-build-automation-tool/

2. How to use it and what it does w.r.t. dependency management -


a. install m2eclipse plugin for eclipse

b. Create a new maven project or update .project
<buildCommand>
 <name>org.eclipse.m2e.core.maven2Builder</name>
</buildCommand>

and

<nature>org.eclipse.m2e.core.maven2Nature</nature>

c. Update .classpath in case it is not already there

<classpathentry kind="con" path="org.eclipse.m2e.MAVEN2_CLASSPATH_CONTAINER">

d. pom.xml

When you clean and build your project, automatically downloads not just all the list of jars mentioned in pom.xml, but also the dependency jars for the mentioned jars, thereby the developer need not have to worry about the dependency management.

*/

    
});