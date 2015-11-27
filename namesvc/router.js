var express = require('express');
var handlers = require('./handlers');
var router = express.Router();

router.route('/')
  .get(function(req,res) {
    res.status(200).json({
      success: true,
      message: 'Welcome to the api'
    });
  });

router.route('/name').get(handlers.name_get);
router.route('/name').post(handlers.name_post);

module.exports = router;
