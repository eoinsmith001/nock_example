var name_get = function(req,res) {
  res.status(200).json({
    success: true,
    name: "Joe Soap"
  });
};
var name_post =  function(req,res) {
  var returned_name = 'Captain '+req.body.name;
  res.status(201).json({
    success: true,
    name: returned_name
  });
};

module.exports = {
  name_get: name_get,
  name_post: name_post
};
