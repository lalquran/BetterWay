var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');
var Order = require('../models/order');

/* GET home page. */
router.get('/', function(req, res, next){
  var successMsg = req.flash('success')[0]; 
  res.render('shop/aisles', { title: 'BetterWay', successMsg: successMsg, noMessages: !successMsg}); 
});

// Coupons page
router.get('/coupons', function(req, res, next) {
  
  res.render('shop/coupons', { title: 'BetterWay'});
});


router.get('/search/:name', function(req, res, next) {
  var Titles          = ['Banana','Strawberry'
    ,'Orange'
    ,'Watermelon'
    ,'Mango'
    ,'Apple'
    ,'Apple Juice'
    ,'Coffee'
    ,'Pepsi'
    ,'Sunkist'
    ,'Tea'
    ,'Water'
    ,'Apple Pie'
    ,'Baguette'
    ,'Slice of Cake'
    ,'Fococcia'
    ,'Muffins'
    ,'Sandwich Bread'
    ,'Brown Eggs'
    ,'Eggs'
    ,'Milk'
    ,'Smoothie'
    ,'Swiss Cheese'
    ,'Yogurt'
    ,'Old Spice Body Spray'
    ,'Hair Brush'
    ,'Toothbrush'
    ,'Toothpaste'
    ,'Trimmers'
    ];
  var allTitles       = [];
  var productChunks   = [];
  var j               = -1;

  var x = req.params.name;
  console.log(x);
  for(var i = 0; i < 30; i ++){
    if(Titles[i] == x){
      j = i;
    }
    
  }
  Product.find(function(error,docs){
    if(j != -1){
      productChunks.push(docs.slice(j,j+1));
      res.render('shop/search', { title: 'BetterWay', products: productChunks});
    }
    else{
      console.log("Nope");
      res.render('shop/search', { title: 'BetterWay', products: productChunks});
    }
  });
});

//route for add-to-cart page
router.get('/search/add-to-cart/:id', function(req, res, next){

  var productChunks   = [];
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/search');
    }
    cart.add(product, product.id);
    productChunks.push(product);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/search'); 
  });
});
//green page

// Coupons page
router.get('/greens', function(req, res, next) {
  
  res.render('shop/greens', { title: 'BetterWay'});
});


// about page
router.get('/about', function(req, res, next) {
  
  res.render('shop/about', { title: 'BetterWay'});
});

router.get('/receipt', function(req, res, next) {
  var orderChunks = [];
  var allItems = [];
  var ord = [];
  var totalPrice;

  Order.find(function(error, docs){
    var length = docs.length;

    console.log(docs.slice(length-1, length));
    orderChunks.push(docs.slice(length-1,length));
    var cart;
    orderChunks[0].forEach(function(order){
            cart = new Cart(order.cart);
            allItems = cart.generateArray();
            totalPrice = cart.totalPrice;
        });


  console.log(allItems);
     res.render('shop/receipt', { title: 'BetterWay', products: orderChunks, items: allItems, cart: cart, totalPrice: totalPrice});

  });

 });

router.get('/fruits', function(req, res, next) {
  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 0; i < 6; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/index', { title: 'BetterWay', products: productChunks});    
  });
});

router.get('/vericoupons', function(req, res, next) {
  console.log("discount pressed");
   var codes = ["BOH232", "AOX200"];
  res.redirect('/shopping-cart');

});


router.get('/beverages', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 6; i < 12; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/beverages', { title: 'BetterWay', products: productChunks});    
  });
});

router.get('/breadandbakery', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 12; i < 18; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/breadandbakery', { title: 'BetterWay', products: productChunks});    
  });
});

router.get('/dairy', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 18; i < 24; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/dairy', { title: 'BetterWay', products: productChunks});    
  });
});

router.get('/personalcare', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 24; i < 30; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/personalcare', { title: 'BetterWay', products: productChunks});    
  });
});

router.get('/grainandpastas', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 30; i < 36; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/grainandpastas', { title: 'BetterWay', products: productChunks});    
  });
});

router.get('/snacks', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 36; i < 42; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/snacks', { title: 'BetterWay', products: productChunks});    
  });
});

router.get('/meatandseafood', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 42; i < 48; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/meatandseafood', { title: 'BetterWay', products: productChunks});    
  });
});



router.get('/cereal', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 48; i < 54; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/cereal', { title: 'BetterWay', products: productChunks});    
  });
});

router.get('/cannedgoodandsoups', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 54; i < 60; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/cannedgoodandsoups', { title: 'BetterWay', products: productChunks});    
  });
});

router.get('/freshraw', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 60; i < 63; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/freshraw', { title: 'BetterWay', products: productChunks});    
  });
});

router.get('/freshcooking', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 63; i < 66; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/freshcooking', { title: 'BetterWay', products: productChunks});    
  });
});


router.get('/freshleafy', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 66; i < 69; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/freshleafy', { title: 'BetterWay', products: productChunks});    
  });
});

router.get('/greenspecial', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 69; i < 72; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/greenspecial', { title: 'BetterWay', products: productChunks});    
  });
});

router.get('/frozen', function(req, res, next) {

  Product.find(function(error,docs){
    var productChunks = [];
    var chunkSize = 3; 
    for (var i = 72; i < 75; i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/frozen', { title: 'BetterWay', products: productChunks});    
  });
});


















//route for add-to-cart page
router.get('/fruits/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/fruits');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/fruits'); 
  });
});

router.get('/beverages/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/beverages');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/beverages'); 
  });
});


//route for add-to-cart page
router.get('/breadandbakery/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/breadandbakery');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/breadandbakery'); 
  });
});


//route for add-to-cart page
router.get('/dairy/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/dairy');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/dairy'); 
  });
});

//route for add-to-cart page
router.get('/personalcare/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/personalcare');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/personalcare'); 
  });
});


//route for add-to-cart page
router.get('/grainandpastas/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/grainandpastas');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/grainandpastas'); 
  });
});


//route for add-to-cart page
router.get('/snacks/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/snacks');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/snacks'); 
  });
});

//route for add-to-cart page
router.get('/meatandseafood/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/meatandseafood');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/meatandseafood'); 
  });
});

//route for add-to-cart page
router.get('/cereal/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/cereal');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/cereal'); 
  });
});

//route for add-to-cart page
router.get('/cannedgoodandsoups/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/cannedgoodandsoups');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/cannedgoodandsoups'); 
  });
});

//route for add-to-cart page
router.get('/freshraw/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/freshraw');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/freshraw'); 
  });
});

//route for add-to-cart page
router.get('/freshcooking/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/freshcooking');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/freshcooking'); 
  });
});

//route for add-to-cart page
router.get('/freshleafy/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/freshleafy');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/freshleafy'); 
  });
});


//route for add-to-cart page
router.get('/greenspecial/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/greenspecial');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/greenspecial'); 
  });
});

//route for add-to-cart page
router.get('/frozen/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  //if cart exists, then pass cart, if not then pass empty js object
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/frozen');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/frozen'); 
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

router.get('/checkout', function(req, res, next){
      //redirect if no cart
  if (!req.session.cart){
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});  
});

router.post('/checkout', function(req, res, next){
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
      res.redirect('/receipt');
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
