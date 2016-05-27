(function () {
    
/*


Articles


http://www.vogella.com/tutorials/EclipseDebugging/article.html#advanced



Eclipse - Remote Debugging external Java Applications


When remote debugging is useful:
1. 'Application' installed on a machine, you need not run through your OSGI run configuration launch to debug if something is going wrong.
2. Debug remotely the running 'Application' on somebody else's machine.
3. If you can only run your application using the external tools run configuration, like you can run your application only through ant script, then you can connect later using remote debugging.

How remote debugging:
1. Search in google, many site provide enough details

Following to be added to the launch arguments for remote debugging:
-Dagentlib:jdwp=transport=dt_socket,server=y,address=8080,suspend=n

Additional Info from WTi help Wiki:


To attach to the installed server (or just dsserver.zip) - make sure you start the server with the right JVM arguments
For example -  - add a suitable JAVA_OPTS to bin/start.sh  (or its equivalent SET JAVA_OPTS in bin\start.bat)
JAVA_OPTS="-agentlib:jdwp=transport=dt_socket,server=y,address=7878,suspend=n"
prior to the final "exec"
Then from your eclipse development environment create a "Remote Java Application" launch and attach to the host where the server is running and specify the appropriate JVM debug port (7878 used above).
Note - if you use suspend=y - then  the server JVM will  freeze - until you attach to it from a debugger.  This is quite useful when you have to debug problems that happen right at startup.


** try a different port 5005 if you get an exception like the below on Windows

   Failed to connect to remote VM. Connection refused.
Connection refused: connect


*/

})();