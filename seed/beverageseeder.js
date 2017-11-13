//Importing product model
var Product = require('../models/beverageProduct');

/*Creating Connection to MongoDB
Seeder will not be applicable during runtime without a connection  mongoDB.
Have to manually run file in NodeJS via connection to database 
*/
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');


/*Creating one product
var product = new Product({
    imagePath: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3-1020x765.jpg',
    title:'Banana',
    description: 'A fruit from the tropical islands of Hawaii!',
    price: 6
});
*/

//Creating an array of products (fruits)
var products = [new Product({
    imagePath: "/images/Beverages/AppleJuice.jpg",
    title:'Apple Juice',
    description: 'Delicious Applie Juice',
    price: 3
}),
new Product({
    imagePath: "/images/Beverages/Coffee.jpg",
    title:'Coffee',
    description: 'That looks good',
    price: 2
}),
new Product({
    imagePath: "/images/Beverages/Pepsi.jpg",
    title:'Pepsi',
    description: 'Soda',
    price: 2
}),
new Product({
    imagePath: "/images/Beverages/Sunkist.jpg",
    title:'Sunkist',
    description: 'Orange Soda',
    price: 2
}),
new Product({
    imagePath: "/images/Beverages/Tea.jpeg",
    title:'Tea',
    description: 'Delicious Tea',
    price: 1
}),
new Product({
    imagePath: "/images/Beverages/Water2.jpg",
    title:'Sandwich Bread',
    description: 'Agua',
    price: 1
})];
/*Save method allows user to save a model to the database.
Mongoose will create a new collection for that model.
Product model will create products collection
*/
//Storing products into database
var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}
/*The purpose of the variable done and the function exit is to ensure that all the products
get saved into the database before the database disconnects.
*/
function exit(){
    mongoose.disconnect();
}