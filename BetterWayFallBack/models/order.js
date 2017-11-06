var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*Defining how the data should look like
User, cart, address, name, paymentId */  
var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true},
    paymentId: {type: String, required: true}   
});

//Used blueprint to create a model named Order 
module.exports = mongoose.model('Order', schema);

