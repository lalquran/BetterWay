var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var Product = require('../models/product');
var Order = require('../models/order');
var Cart = require('../models/cart');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/profile', isLoggedIn, function(req, res, next){
    Order.find({user: req.user}, function(err, orders){
        if (err) {
            return res.write('Error!');
        }
        var cart;
        orders.forEach(function(order){
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        });
        res.render('user/profile', { orders: orders});
    });
});

//Setting user/logout route to be a redirect to the 
//home page after logout functionality is executed
router.get('/logout', isLoggedIn, function(req, res, next){
    //Passport
    req.logout();
    res.redirect('/');
});

//Checks to see if the user is not logged in, if not then redirected to homepage
router.use('/', notLoggedIn, function(req, res, next){
    next();
});

router.get('/signup', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signup',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});
//Routing local.signup in the passport.js file
router.post('/signup', passport.authenticate('local.signup',{
    failureRedirect: '/user/signup',
    failureFlash: true
}), function (req, res, next){
    if (req.session.oldUrl){
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;        
        res.redirect(oldUrl);
    } else {
        res.redirect('/user/profile');
    }
});
  
  
router.get('/signin', function(req,res,next){
    var messages = req.flash('error');
    res.render('user/signin',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});
  
router.post('/signin', passport.authenticate('local.signin', {
    failureRedirect: '/user/signin',
    failureFlash: true
}), function (req, res, next){
    if (req.session.oldUrl){
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;        
        res.redirect(oldUrl);
    } else {
        res.redirect('/user/profile');
    }
});



module.exports = router;

function isLoggedIn(req, res, next){
    //Passport
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}  

function notLoggedIn(req, res, next){
    //Passport
    if (!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}  