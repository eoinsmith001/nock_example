var handlers = require('../handlers');
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
describe('name post handler', function() {
  it('should add Captain to the input name', function(done) {
    var req = {
      body: {
        name: 'Adam Barnes'
      }
    };
    var res = {};
    return handlers.name_post(req, res)
      .then(function(resolution) {
        expect(resolution.status).to.eql(201);
        var object = resolution.result;
        expect(object.success).to.be.true;
        expect(object.name).to.contain('Captain');
        done();
      })
      .catch(done);
  });
});
