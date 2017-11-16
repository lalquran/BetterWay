var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var BreadAndBakeryProduct = require('../models/breadandbakeryProduct');
var BeverageProduct = require('../models/beverageProduct');
var DairyProduct = require('../models/dairyProduct');
var PersonalCareProduct = require('../models/personalcareProduct');
var Cart = require('../models/cart');
var Order = require('../models/order');

// Coupons page
router.get('/coupons', function(req, res, next) {
    var successMsg = req.flash('success')[0];
    
    res.render('shop/coupons', { title: 'BetterWay', successMsg: successMsg, noMessages: !successMsg});
});

// FRUIT PAGE //
router.get('/fruits', function(req, res, next) {
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

//route for add-to-cart page
router.get('/fruits/add-to-cart/:id', function(req, res, next){

  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/shop/fruits');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/shop/fruits');
  });
});


//route for add-to-cart page
router.get('/history/add-to-cart/:id', function(req, res, next){

  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/user/profile');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/user/profile'); 
  });
});





// Bread And Bakery Page //
router.get('/breadandbakery', function(req, res, next) {
  //if a success message exist, fetch it
  var successMsg = req.flash('success')[0];

  BreadAndBakeryProduct.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/breadandbakery', { title: 'BetterWay', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
  });
});

//route for add-to-cart page
router.get('/breadandbakery/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  BreadAndBakeryProduct.findById(productId, function(err, product){
    if (err){
      return res.redirect('/shop/breadandbakery');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/shop/breadandbakery');
  });
});

// Beverage Page //
router.get('/beverages', function(req, res, next) {
  //if a success message exist, fetch it
  var successMsg = req.flash('success')[0];

  BeverageProduct.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/beverages', { title: 'BetterWay', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
  });
});

//route for add-to-cart page
router.get('/beverages/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  BeverageProduct.findById(productId, function(err, product){
    if (err){
      return res.redirect('/shop/beverages');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/shop/beverages');
  });
});

// Dairy Page //
router.get('/dairy', function(req, res, next) {
  //if a success message exist, fetch it
  var successMsg = req.flash('success')[0];

  DairyProduct.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/dairy', { title: 'BetterWay', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
  });
});

//route for add-to-cart page
router.get('/dairy/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  DairyProduct.findById(productId, function(err, product){
    if (err){
      return res.redirect('/shop/dairy');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/shop/dairy');
  });
});

// Personal Care Page //
router.get('/personalcare', function(req, res, next) {
  //if a success message exist, fetch it
  var successMsg = req.flash('success')[0];

  PersonalCareProduct.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/personalcare', { title: 'BetterWay', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
  });
});

//route for add-to-cart page
router.get('/personalcare/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  PersonalCareProduct.findById(productId, function(err, product){
    if (err){
      return res.redirect('/shop/personalcare');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/shop/personalcare');
  });
});

//Removing one item in shopping cart
router.get('/reduce/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shop/shopping-cart');
});

//Removing all items in shopping cart
router.get('/remove/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/shop/shopping-cart');
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
    return res.redirect('/shop/shopping-cart');
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
