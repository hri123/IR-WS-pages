(function () {
    
/*


Big Words

Core Java
OOP - UML
Design Patterns, Design Principles
Spring
JEE
OSGi
Multi Threading
Debugging
Eclipse
Memory
Build
Logging
Exception handling
Collections - Data structures - Generics - Util Package
IO - NIO
Reflection
Classloader
Web Service - WSDL / REST-SOAP
anonymous classes (closure)
Security - XSS / SQL injection

Login page / Single sign on / how do you make sure that a jsp page in an application does not open up directly bypassing the authentication / authorization, when somebody knows the direct url to that jsp

Effective Java Book



Big Words Details


Everyday Issues - Trivia


1. java.io.tmpdir Inconsitency

Some platforms return separator at the end of the value for java.io.tmpdir, whereas some platforms (AIX) do not return the separator.

http://rationalpi.wordpress.com/2007/01/26/javaiotmpdir-inconsitency/
http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4391434

2. setClob issues:
sometimes

StringReader reader = new StringReader(s);
preparedStmt.setClob(index, reader);


using preparedStmt.setObject(index, s, java.sql.Types.CLOB);
fixes the issue

3. birt engine used to crash

identified that the underlying jre in the product had got upgraded from 1.7SR1 to 1.7SR2, and it seems many memory related things were changed/fixed in 1.7.

4. Security manager in java
http://docs.oracle.com/javase/tutorial/essential/environment/security.html

Useful Tools


1. http://www.sonarsource.org/ ( Improve Code Quality)
2. Mockito

*/    
    
})();