## Testing

Pattern: 

  - Handler takes req argument (does not necessarily need res)
  - Handler returns a Promise which resolves(/rejects) with the information required for res (statuscode, jsonObject)
  - Handler can then be tested in mocha by attaching .then to the returned Promise and asserting on resolved value
  - make the mocha test use `done()`; `it('works',function(done)`, and then `done` after assertions (in resolve block)
  - add a `.catch(done)` to ensure a proper test failure if assertions fail (rather than a hang)
