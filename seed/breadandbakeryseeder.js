//Importing product model
var Product = require('../models/breadandbakeryProduct');

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
    imagePath: "/images/BreadAndBakery/Applepie.jpg",
    title:'Apple Pie',
    description: 'Delicious Applie Pie',
    price: 10
}),
new Product({
    imagePath: '/images/BreadAndBakery/Baguette.jpeg',
    title:'Baguette',
    description: 'Tasty',
    price: 4
}),
new Product({
    imagePath: '/images/BreadAndBakery/Cake.jpg',
    title:'Slice of Cake',
    description: 'Yum',
    price: 2
}),
new Product({
    imagePath: '/images/BreadAndBakery/Fococcia.jpg',
    title:'Fococcia',
    description: 'Nice',
    price: 6
}),
new Product({
    imagePath: '/images/BreadAndBakery/Muffins.jpeg',
    title:'Muffins',
    description: 'Delicious Muffins',
    price: 3
}),
new Product({
    imagePath: '/images/BreadAndBakery/Sandwichbread.jpeg',
    title:'Sandwich Bread',
    description: 'Tasty',
    price: 4
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