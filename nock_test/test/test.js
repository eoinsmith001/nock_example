var request = require('request');
var nock = require('nock');
var mocha = require('mocha');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
describe('an api call',function() {
  it('should be nockable, allowing to drop in a substitute result for API call',function(done) {
    var url = 'http://localhost:3001',
        api = '/api/name';
    var qod = nock(url).get(api).reply(200,{fake: "unreal"});
    var qod = nock(url).post(api).reply(200,{fakepost: "unrealpost"});
    var fetcher = require('../util');
    fetcher().then(function(thing) {
      expect(thing).to.have.property("fakepost");
      done();
    });
  });
});

