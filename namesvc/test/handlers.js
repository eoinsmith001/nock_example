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
    var res = {
      status: function(arg) {
        this._status = arg;
        return this;
      },
      json: function(object) {
        expect(this._status).to.eql(201);
        expect(object.name).to.eql('Captain Adam Barnes');
        expect(object.success).to.be.true;
        done();
      }
    }
    handlers.name_post(req, res);
  });
});
