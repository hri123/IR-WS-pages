(function() {


/*

DB2

Hibernate:
- caching
- Transaction Processing in Distributed Databases



Explain how you would design a database system ?


TODO



Big Words

Tablespace, Tablespace max size, Temporary Tablespace
Database page size
Clustered server set up
Automatic Fail over



Big Words Details

create multiple tablespace - best practice - one for index, etc, put each table in a tablespace if required
Database page size - 32KB, go for the biggest, to allow the widest rows and most flexibility, (We did some performance tests comparing 32KB and 8KB and there was very less difference)

Performance Tuning


Tuning using OQWT
db2 explain
db2 advise
explain plan
visual advisor
db2top
db2pd - dynamic statement cache


OPM / DB2 - (Various parts I have touched)

1. Database basics / fundamentals - The list of database questions from the book - JAVA/J2EE Interview Questions by Shivprasad Koirala (MUST revise before interviews)

2. Jargons:

a. Statement Concentrator - https://www.ibm.com/developerworks/community/blogs/e25892f0-20f7-46ff-bbe9-c7c03fb3036f/entry/db2_9_7_statement_concentrator_performance_benefits2?lang=en

b. STMM - http://pic.dhe.ibm.com/infocenter/db2luw/v9r7/index.jsp?topic=%2Fcom.ibm.db2.luw.admin.perf.doc%2Fdoc%2Fc0021627.html

c. package cache - http://www.ibm.com/developerworks/data/library/techarticle/dm-1211packagecache/

d. event monitors

e. Database objects - Bufferpool, tablespace, etc

3. Solving DB2 performance issues using OPM step by step - Refer to Steve Rees presentations
TODO: elaborate here

4. OCR Statement Details - capture record structure

5. CLPPlus

6. Star / Snow flake schema.

7. Performance:
a. "20 to 25 percent of performance tuning improvements result from configuring the database manager, database, and tablespace container and parameter settings, while 75 percent or more of performance improvements come from properly tuning SQL"

b. Having indexes on the table increases the time for inserts, but improves the time for retrieval.

8. http://pic.dhe.ibm.com/infocenter/db2luw/v10r5/index.jsp?topic=%2Fcom.ibm.db2.luw.admin.perf.doc%2Fcom.ibm.db2.luw.admin.perf.doc-gentopic3.html

#################################################################################

OPM Areas:

#################################################################################

1. Use cases:

a. One report that gives the top 10 statements, top 10 index scans and top ten table usage in the same report.
b. Is there a way to identify which workload is causing the most physical I/O, most logical I/O.

2. OPM Features:



a. OPM gives delta

Everyday Issues - Trivia


1. ? SQL204 at the command prompt to get the details of error -- -204

2. DB tool -- DB Viewer - http://www.ne.jp/asahi/zigen/home/plugin/dbviewer/ (eclipse update site)



*/

})();
