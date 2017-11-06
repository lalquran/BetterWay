//Importing product model
var Product = require('../models/product');

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
    imagePath: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3-1020x765.jpg',
    title:'Banana',
    description: 'A fruit from the tropical islands of Hawaii!',
    price: 6
}),
new Product({
    imagePath: 'http://clv.h-cdn.co/assets/15/22/768x518/gallery-1432664914-strawberry-facts1.jpg',
    title:'Strawberry',
    description: 'Backyard Fruit',
    price: 3
}),
new Product({
    imagePath: 'http://www.healthyfoodhouse.com/wp-content/uploads/2013/03/orange-king-of-fruits.jpg',
    title:'Orange',
    description: 'Graveyard Fruit!!!',
    price: 4
}),
new Product({
    imagePath: 'http://www.amazingolive.com/uploads/7/2/4/2/72424671/s328690282648775400_p177_i4_w800.jpeg',
    title:'Watermelon',
    description: 's',
    price: 15
}),
new Product({
    imagePath: 'http://i.ndtvimg.com/i/2017-04/mango_650x400_81493026633.jpg',
    title:'Mango',
    description: 's',
    price: 11
}),
new Product({
    imagePath: 'https://www.samaa.tv/wp-content/uploads/2017/04/Apple-640x400.jpg',
    title:'Apple',
    description: 'Buy this fruit for guaranteed A+ on all your exams!!',
    price: 100
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