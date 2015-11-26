# Using nock when testing a component which hits an api

Contains: 
  - namesvc: a simple express restful api which accepts GET and POST to /name endpoint
  - nock_test: a single module wrapping a request to namesvc, and a mocha test

## Run

Start the namesvc

```
cd namesvc
npm install
nodemon server.sh
# validate endpoints
curl -X GET localhost:3001/name
curl -X POST localhost:3001/name
# note the morgan logging generated by the app (http requests are being received)
```

Now run the mocha test, in which the call to namesvc is nocked

```
cd nock_test
npm install
mocha
```

Read nock_test/test/test.js, see that the expectation is that the fake nock response is generated by the call to the method which hits the API.
Note that no morgan logging is generated in the namesvc
Also, the mocha test works even if the namesvc is stopped

## Extra detail

```
cd nock_test
DEBUG=nock.* mocha
```