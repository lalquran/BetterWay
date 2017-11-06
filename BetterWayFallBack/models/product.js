var mongoose = require('mongoose');
var ProductData = mongoose.Schema;

/*Defining how the data should look like
Path to image, title, description, price */  
var schema = new ProductData({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}    
});

//Used blueprint to create a model named Product 
module.exports = mongoose.model('Product', schema);

