(function() {


/*

https://www.meteor.com/install
https://www.meteor.com/try

meteor add iron:router
meteor update iron:router

Copy the Meteor_Seed_Project from Inspinia
cd into it
(meteor npm install)
meteor

to solve es6 syntax issues
meteor add ecmascript
http://stackoverflow.com/a/37468456/512126


meteor mongo
db.IterationDetails.find().pretty()
meteor mongo -U - mongo jdbc url for other clients to connect to

How Meteor Works:

<img src="./source/JavaScript/images/howMeteorWorks1.png" height="400px" width="800px"></img>

(from https://www.youtube.com/watch?v=FsnZB6yRimI)
Modern Apps:
Instant Response - you dont have to wait for the round-trip to the server
Reactive UI - The UI is up to date with the data in the database
Fast Load Time - The whole UI is sent to client once, so subsequent loads are fast
Multiple Platform - you can access the same data through websites and mobile apps

Implementation Requirements:
Latency compensation
Rendering views on the client
Subscribing to data from the server
Client side data caching

How does meteor do this stuff:
Server Side: 
Livequery (Real time Mongo DB) - query on the client is updated live, the query results are returned first and the results get updated when something changes on DB 

Communication - using DDP (Distributed Data Protocol) - for latency compensation - pub/sub and rpc in the same protocol (better than REST)

Client Side:
Minimongo (Client - side cache)
Tracker (Dependency Tracking) - the functions used to get data on the client are rerun when the the data changes on the database
Blaze - (reactive HTML rendering)

*/

})();
