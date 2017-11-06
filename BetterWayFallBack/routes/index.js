var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');
var Order = require('../models/order');
/* GET home page. */
router.get('/', function(req, res, next) {
  //if a success message exist, fetch it
  var successMsg = req.flash('success')[0];

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 0; i < docs.length; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/index', { title: 'BetterWay', products: productChunks, successMsg: successMsg, noMessages: !successMsg});    
  });
});

// route for aisles page
router.get('/aisles', function(req, res, next){
  res.render('shop/aisles'); 
});

//route for add-to-cart page
router.get('/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/'); 
  });
});
//Removing one item in shopping cart
router.get('/reduce/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

//Removing all items in shopping cart
router.get('/remove/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next){
  if (!req.session.cart){
    return res.render('shop/shopping-cart', {products: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});  
});

router.get('/checkout', isLoggedIn, function(req, res, next){
      //redirect if no cart
  if (!req.session.cart){
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});  
});

router.post('/checkout', isLoggedIn, function(req, res, next){
    //redirect if no cart
  if (!req.session.cart){
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);  
  //Code Received from Stripe API (Create a Charge)
  var stripe = require("stripe")(
    "sk_test_IhjdprysPmCubJb9gQY9LrxS"
  );
  
  stripe.charges.create({
    amount: cart.totalPrice * 100,
    currency: "usd",
    source: req.body.stripeToken, // obtained with Stripe.js
    description: "Test Charge"
  }, function(err, charge) {
    // asynchronously called
    if (err){
      req.flash('error', err.message);
      return res.redirect('/checkout');
    }
    var order = new Order({
      user: req.user,
      cart: cart,
      address: req.body.address,
      name: req.body.name,
      paymentId: charge.id
    });
    order.save(function(err, result){
      req.flash('success', 'Product successfully purchased!');
      req.session.cart = null;
      res.redirect('/');
    });
  });  
});

module.exports = router;

function isLoggedIn(req, res, next){
  //Passport
  if (req.isAuthenticated()){
      return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}  
