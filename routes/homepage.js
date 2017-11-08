var express = require('express');
var router = express.Router();

// route for aisles page
router.get('/', function(req, res, next){
  res.render('shop/aisles'); 
});

module.exports = router;