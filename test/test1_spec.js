var frisby = require('frisby');

var rootUrl = 'http://jsonplaceholder.typicode.com';

 frisby.globalSetup({ // globalSetup is for ALL requests
  request: {
    headers: { 'Content-Type': 'application/json' 
    
        }
  }
});

 frisby.create('Testing of post')
  .post(rootUrl + '/posts', {
     "title": "foo",
    "body": "bar",
    "userId": 1
  }, {json: true})
  .expectStatus(201)
.toss();

frisby.create('Testing of get')
.get(rootUrl + '/posts/1')
.expectStatus(200)
.expectHeaderContains('content-type', 'application/json')
//.inspectJSON()
.expectJSONTypes( {
  title: String,
  body: String,
  userId: Number,
  id: Number
})
.toss();

frisby.create('Testing of get List')
.get(rootUrl + '/posts')
.expectStatus(200)
.expectHeaderContains('content-type', 'application/json')
//.inspectJSON() use to show all json data return from server
.expectJSONTypes('?',{
  title: String,
  body: String,
  userId: Number,
  id: Number
})
.toss();

