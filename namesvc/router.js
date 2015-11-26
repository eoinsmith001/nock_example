var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req,res) {
    res.status(200).json({
      success: true,
      message: 'Welcome to the api'
    });
  });

router.route('/name')
  .get(function(req,res) {
    res.status(200).json({
      success: true,
      name: "Joe Soap"
    });
  })
  .post(function(req,res) {
    res.status(201).json({
      success: true,
      name: "Postman Pat"
    });
  });

module.exports = router;
