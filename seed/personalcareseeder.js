//Importing product model
var Product = require('../models/personalcareProduct');

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
    imagePath: "/images/PersonalCare/Bodyspray.jpg",
    title:'Old Spice Body Spray',
    description: 'Smells Good',
    price: 3
}),
new Product({
    imagePath: "/images/PersonalCare/Hairbrush.jpg",
    title:'Hair Brush',
    description: 'Check out this hair brush.',
    price: 5
}),
new Product({
    imagePath: "/images/PersonalCare/Toothbrush.jpeg",
    title:'Toothbrush',
    description: 'Keep your teeth clean with this toothbrush!',
    price: 2
}),
new Product({
    imagePath: "/images/PersonalCare/Toothpaste.jpeg",
    title:'Toothpaste',
    description: 'Toothpaste',
    price: 2
}),
new Product({
    imagePath: "/images/PersonalCare/Trimmers.jpeg",
    title:'Trimmers',
    description: 'Trimmers',
    price: 20
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