//Importing product model
var Product = require('../models/product');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/shopping";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var products = [new Product({
        _id: 1,
        imagePath: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3-1020x765.jpg',
        title:'Banana',
        description: 'A fruit from the tropical islands of Hawaii!',
        price: 6
    }),
    new Product({
        _id: 2,
        imagePath: 'http://clv.h-cdn.co/assets/15/22/768x518/gallery-1432664914-strawberry-facts1.jpg',
        title:'Strawberry',
        description: 'Backyard Fruit',
        price: 3
    }),
    new Product({
        _id: 3,
        imagePath: 'http://www.healthyfoodhouse.com/wp-content/uploads/2013/03/orange-king-of-fruits.jpg',
        title:'Orange',
        description: 'Graveyard Fruit!!!',
        price: 4
    }),
    new Product({
        _id: 4,
        imagePath: 'http://www.amazingolive.com/uploads/7/2/4/2/72424671/s328690282648775400_p177_i4_w800.jpeg',
        title:'Watermelon',
        description: 's',
        price: 15
    }),
    new Product({
        _id: 5,
        imagePath: 'http://i.ndtvimg.com/i/2017-04/mango_650x400_81493026633.jpg',
        title:'Mango',
        description: 's',
        price: 11
    }),
    new Product({
        _id: 6,
        imagePath: 'https://www.samaa.tv/wp-content/uploads/2017/04/Apple-640x400.jpg',
        title:'Apple',
        description: 'Buy this fruit for guaranteed A+ on all your exams!!',
        price: 100
    }),
    new Product({
        _id: 7,
        imagePath: "/images/Beverages/AppleJuice.jpg",
        title:'Apple Juice',
        description: 'Delicious Applie Juice',
        price: 3
    }),
    new Product({
        _id: 8,
        imagePath: "/images/Beverages/Coffee.jpg",
        title:'Coffee',
        description: 'That looks good',
        price: 2
    }),
    new Product({
        _id: 9,
        imagePath: "/images/Beverages/Pepsi.jpg",
        title:'Pepsi',
        description: 'Soda',
        price: 2
    }),
    new Product({
        _id: 10,
        imagePath: "/images/Beverages/Sunkist.jpg",
        title:'Sunkist',
        description: 'Orange Soda',
        price: 2
    }),
    new Product({
        _id: 11,
        imagePath: "/images/Beverages/Tea.jpeg",
        title:'Tea',
        description: 'Delicious Tea',
        price: 1
    }),
    new Product({
        _id: 12,
        imagePath: "/images/Beverages/Water2.jpg",
        title:'Water',
        description: 'Water',
        price: 1
    }),
    new Product({
        _id: 13,
        imagePath: "/images/BreadAndBakery/Applepie.jpg",
        title:'Apple Pie',
        description: 'Delicious Applie Pie',
        price: 10
    }),
    new Product({
        _id: 14,
        imagePath: '/images/BreadAndBakery/Baguette.jpeg',
        title:'Baguette',
        description: 'Tasty',
        price: 4
    }),
    new Product({
        _id: 15,
        imagePath: '/images/BreadAndBakery/Cake.jpg',
        title:'Slice of Cake',
        description: 'Yum',
        price: 2
    }),
    new Product({
        _id: 16,
        imagePath: '/images/BreadAndBakery/Fococcia.jpg',
        title:'Fococcia',
        description: 'Nice',
        price: 6
    }),
    new Product({
        _id: 17,
        imagePath: '/images/BreadAndBakery/Muffins.jpeg',
        title:'Muffins',
        description: 'Delicious Muffins',
        price: 3
    }),
    new Product({
        _id: 18,
        imagePath: '/images/BreadAndBakery/Sandwichbread.jpeg',
        title:'Sandwich Bread',
        description: 'Tasty',
        price: 4
    }),
    new Product({
        _id: 19,
        imagePath: "/images/Dairy/Browneggs.jpeg",
        title:'Brown Eggs',
        description: 'Delicious!',
        price: 3
    }),
    new Product({
        _id: 20,
        imagePath: "/images/Dairy/Eggs.jpg",
        title:'Eggs',
        description: 'Buy some eggs.',
        price: 2
    }),
    new Product({
        _id: 21,
        imagePath: "/images/Dairy/Milk.jpg",
        title:'Milk',
        description: 'He needs some milk!',
        price: 2
    }),
    new Product({
        _id: 22,
        imagePath: "/images/Dairy/Smoothie.jpg",
        title:'Smoothie',
        description: 'That looks amazing.',
        price: 4
    }),
    new Product({
        _id: 23,
        imagePath: "/images/Dairy/Swisscheese.jpg",
        title:'Swiss Cheese',
        description: 'Yummy Cheese',
        price: 5
    }),
    new Product({
        _id: 24,
        imagePath: "/images/Dairy/Yogurt.jpg",
        title:'Yogurt',
        description: 'Fruity Yogurt',
        price: 4
    }),
    new Product({
        _id: 25,
        imagePath: "/images/PersonalCare/Bodyspray.jpg",
        title:'Old Spice Body Spray',
        description: 'Smells Good',
        price: 3
    }),
    new Product({
        _id: 26,
        imagePath: "/images/PersonalCare/Hairbrush.jpg",
        title:'Hair Brush',
        description: 'Check out this hair brush.',
        price: 5
    }),
    new Product({
        _id: 27,
        imagePath: "/images/PersonalCare/Toothbrush.jpeg",
        title:'Toothbrush',
        description: 'Keep your teeth clean with this toothbrush!',
        price: 2
    }),
    new Product({
        _id: 28,
        imagePath: "/images/PersonalCare/Toothpaste.jpeg",
        title:'Toothpaste',
        description: 'Toothpaste',
        price: 2
    }),
    new Product({
        _id: 29,
        imagePath: "/images/PersonalCare/Trimmers.jpeg",
        title:'Trimmers',
        description: 'Trimmers',
        price: 20
    })];

    db.collection("products").insertMany(products, function(err,res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
})
