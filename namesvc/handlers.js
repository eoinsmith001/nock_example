var name_get = function(req,res) {
  res.status(200).json({
    success: true,
    name: 'Joe Soap'
  });
};

function add_captain(name) {
  return new Promise(function(resolve,reject) {
    resolve('Captain '+name);
  });
}

var name_post =  function(req) {
  return new Promise(function(resolve,reject) {
    add_captain(req.body.name)
      .then(function(modified_name) {
        resolve( {
          status: 201,
          result : {
            success: true,
            name: modified_name
          }
        });
      });
  });
};

module.exports = {
  name_get: name_get,
  name_post: name_post
};
