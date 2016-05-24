(function() {

/*

Concurrent Package in Java


This provides elegant yet efficient solutions to many common concurrency programming issues.

1. Use ReentrantLock (tryLock, unlock, etc) to prevent deadlocks instead of the traditional native synchronized keyword.
2. Use ConcurrentHashMap instead of synchronized (map) style.
3. Atomic ops -> use incrementAndGet() instead of i++
4. Wait
CountDownLatch dependencyLatch = new CountDownLatch(1);
...
dependencyLatch.await(5, TimeUnit.MINUTES);
...
dependencyLatch.countDown();

*/

})();
