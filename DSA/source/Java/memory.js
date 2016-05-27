(function () {
    
/*


Memory Related Details


1. Runtime memory structure in java
http://www.javatutorialhub.com/java-stack-heap.html

2. Relation Between JVM MaxPermSize and HeapSize (-Xms, -Xmx, -XX:PermSize, -XX:MaxPermSize)
http://indrayanblog.blogspot.in/2011/03/cxv.html

3. In JDK 7, interned strings are no longer allocated in the permanent generation of the Java heap, but are instead allocated in the main part of the Java heap (known as the young and old generations), along with the other objects created by the application. This change will result in more data residing in the main Java heap, and less data in the permanent generation, and thus may require heap sizes to be adjusted. Most applications will see only relatively small differences in heap usage due to this change, but larger applications that load many classes or make heavy use of the String.intern() method will see more significant differences.
http://en.wikipedia.org/wiki/String_interning

4. GC - Concurrent mark sweep collector (CMS)
http://docs.oracle.com/javase/6/docs/technotes/guides/vm/cms-6.html

5. To enable verbose and taking java core during NPE please set the below arguments with JVM
i) -verbose:gc
ii) -Xdump:java:events=throw,filter=java/lang/NullPointerException
e.g java -verbose:gc -Xdump:heap+java:events=throw,filter=java/lang/NullPointerException <Main Class>

6. Soft, Weak and Phantom References


How to identify if application is having memory leaks


Is it leaking memory ?

1. there is an utility called jConsole in the bin folder of java installation
2. Start it and connect to the application suspected of leaking memory.

In case you are having problems with jConsole, use a tool called YourKit

1. For using Yourkit, an additional step needs to be done.
2. Add the line "-agentpath:C:\Program Files\YourKit Java Profiler 8.0.19\bin\win32\yjpagent.dll=port=1654,sampling" as additional parameters to the command line invocation of java.

IBM Support Assistant (ISA) provides tools to view the used heap over time
http://www.ibm.com/developerworks/java/library/j-ibmtools5/

Using either of them you get a heap memory monitor as a graph on the running application.

Once the application is started
Run Garbage collection
Now perform the operation that is suspected.
Click the Run garbage collection
If the memory used does not return to from where it started then it is leaking memory.


Now in case you want to dump the heap on Cntrl Break key, add the following to the java command line -> -Xdump:heap:events=user

In case you want to log the GC log, add the following:
-Xverbosegclog:c:\temp\gclog.txt


You can use heap analyser tools to analyse the heap to identify heap dumps at different intervals in time to find out which packages are accumulating memory and not releasing them on garbage collection.

e.g.:
http://snappy.watson.ibm.com/ (Peter F Sweeney , Erik Altman , Nick Mitchell )
http://www.eclipse.org/mat/ -- this requires a additional plugin, com.ibm.dtfj.feature, Diagnostic Tool Framework for Java, to process .phd files.



*/

})();