var request = require('request');
var promise = require('promise');
var fetcher = function() {
  var url = 'http://localhost:3001';
  var api = '/api/name';
  return new Promise(function(resolve,reject) {
    request.post(url+api,function(err, res, body) {
      if (err) reject(err);
      resolve(JSON.parse(body));
    });
  });
}
module.exports = fetcher;
