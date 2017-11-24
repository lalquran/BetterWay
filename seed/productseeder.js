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
        price: 6,
        aisle: 'Fruits'
    }),
    new Product({
        _id: 2,
        imagePath: 'http://clv.h-cdn.co/assets/15/22/768x518/gallery-1432664914-strawberry-facts1.jpg',
        title:'Strawberry',
        description: 'Backyard Fruit',
        price: 3,
        aisle: 'Fruits'
    }),
    new Product({
        _id: 3,
        imagePath: 'http://www.healthyfoodhouse.com/wp-content/uploads/2013/03/orange-king-of-fruits.jpg',
        title:'Orange',
        description: 'Graveyard Fruit!!!',
        price: 4,
        aisle: 'Fruits'
    }),
    new Product({
        _id: 4,
        imagePath: 'http://www.amazingolive.com/uploads/7/2/4/2/72424671/s328690282648775400_p177_i4_w800.jpeg',
        title:'Watermelon',
        description: 'Sweet Watermelon',
        price: 15,
        aisle: 'Fruits'
    }),
    new Product({
        _id: 5,
        imagePath: 'http://i.ndtvimg.com/i/2017-04/mango_650x400_81493026633.jpg',
        title:'Mango',
        description: 'Delicious Mango',
        price: 11,
        aisle: 'Fruits'
    }),
    new Product({
        _id: 6,
        imagePath: 'https://www.samaa.tv/wp-content/uploads/2017/04/Apple-640x400.jpg',
        title:'Apple',
        description: 'Buy this fruit for guaranteed A+ on all your exams!!',
        price: 100,
        aisle: 'Fruits'
    }),
    new Product({
        _id: 7,
        imagePath: "/images/Beverages/AppleJuice.jpg",
        title:'Apple Juice',
        description: 'Delicious Apple Juice',
        price: 3,
        aisle: 'Beverages'
    }),
    new Product({
        _id: 8,
        imagePath: "/images/Beverages/Coffee.jpg",
        title:'Coffee',
        description: 'That looks good',
        price: 2,
        aisle: 'Beverages'
    }),
    new Product({
        _id: 9,
        imagePath: "/images/Beverages/Pepsi.jpg",
        title:'Pepsi',
        description: 'Soda',
        price: 2,
        aisle: 'Beverages'
    }),
    new Product({
        _id: 10,
        imagePath: "/images/Beverages/Sunkist.jpg",
        title:'Sunkist',
        description: 'Orange Soda',
        price: 2,
        aisle: 'Beverages'
    }),
    new Product({
        _id: 11,
        imagePath: "/images/Beverages/Tea.jpeg",
        title:'Tea',
        description: 'Delicious Tea',
        price: 1,
        aisle: 'Beverages'
    }),
    new Product({
        _id: 12,
        imagePath: "/images/Beverages/Water2.jpg",
        title:'Water',
        description: 'Water',
        price: 1,
        aisle: 'Beverages'
    }),
    new Product({
        _id: 13,
        imagePath: "/images/BreadAndBakery/Applepie.jpg",
        title:'Apple Pie',
        description: 'Delicious Applie Pie',
        price: 10,
        aisle: 'Bread And Bakery'
    }),
    new Product({
        _id: 14,
        imagePath: '/images/BreadAndBakery/Baguette.jpeg',
        title:'Baguette',
        description: 'Tasty',
        price: 4,
        aisle: 'Bread And Bakery'
    }),
    new Product({
        _id: 15,
        imagePath: '/images/BreadAndBakery/Cake.jpg',
        title:'Slice of Cake',
        description: 'Yum',
        price: 2,
        aisle: 'Bread And Bakery'
    }),
    new Product({
        _id: 16,
        imagePath: '/images/BreadAndBakery/Fococcia.jpg',
        title:'Fococcia',
        description: 'Nice',
        price: 6,
        aisle: 'Bread And Bakery'
    }),
    new Product({
        _id: 17,
        imagePath: '/images/BreadAndBakery/Muffins.jpeg',
        title:'Muffins',
        description: 'Delicious Muffins',
        price: 3,
        aisle: 'Bread And Bakery'
    }),
    new Product({
        _id: 18,
        imagePath: '/images/BreadAndBakery/Sandwichbread.jpeg',
        title:'Sandwich Bread',
        description: 'Tasty',
        price: 4,
        aisle: 'Bread And Bakery'
    }),
    new Product({
        _id: 19,
        imagePath: "/images/Dairy/Browneggs.jpeg",
        title:'Brown Eggs',
        description: 'Delicious!',
        price: 3,
        aisle: 'Dairy'
    }),
    new Product({
        _id: 20,
        imagePath: "/images/Dairy/Eggs.jpg",
        title:'Eggs',
        description: 'Buy some eggs.',
        price: 2,
        aisle: 'Dairy'
    }),
    new Product({
        _id: 21,
        imagePath: "/images/Dairy/Milk.jpg",
        title:'Milk',
        description: 'He needs some milk!',
        price: 2,
        aisle: 'Dairy'
    }),
    new Product({
        _id: 22,
        imagePath: "/images/Dairy/Smoothie.jpg",
        title:'Smoothie',
        description: 'That looks amazing.',
        price: 4,
        aisle: 'Dairy'
    }),
    new Product({
        _id: 23,
        imagePath: "/images/Dairy/Swisscheese.jpg",
        title:'Swiss Cheese',
        description: 'Yummy Cheese',
        price: 5,
        aisle: 'Dairy'
    }),
    new Product({
        _id: 24,
        imagePath: "/images/Dairy/Yogurt.jpg",
        title:'Yogurt',
        description: 'Fruity Yogurt',
        price: 4,
        aisle: 'Dairy'
    }),
    new Product({
        _id: 25,
        imagePath: "/images/PersonalCare/Bodyspray.jpg",
        title:'Old Spice Body Spray',
        description: 'Smells Good',
        price: 3,
        aisle: 'Personal Care'
    }),
    new Product({
        _id: 26,
        imagePath: "/images/PersonalCare/Hairbrush.jpg",
        title:'Hair Brush',
        description: 'Check out this hair brush.',
        price: 5,
        aisle: 'Personal Care'
    }),
    new Product({
        _id: 27,
        imagePath: "/images/PersonalCare/Toothbrush.jpeg",
        title:'Toothbrush',
        description: 'Keep your teeth clean with this toothbrush!',
        price: 2,
        aisle: 'Personal Care'
    }),
    new Product({
        _id: 28,
        imagePath: "/images/PersonalCare/Toothpaste.jpeg",
        title:'Toothpaste',
        description: 'Toothpaste',
        price: 2,
        aisle: 'Personal Care'
    }),
    new Product({
        _id: 29,
        imagePath: "/images/PersonalCare/Trimmers.jpeg",
        title:'Trimmers',
        description: 'Trimmers',
        price: 20,
        aisle: 'Personal Care'
    }),
    new Product({
    _id: 30,    
    imagePath: "/images/PersonalCare/Lotion.jpeg",
    title:'Lotion',
    description: 'Lotion',
    price: 3,
        aisle: 'Personal Care'
}),
    new Product({
     _id: 31,
    imagePath: "/images/grainandpastas/brownrice.jpg",
    title:'Brownrice',
    description: 'Eat and you shall fill yourself with fiber!!!',
    price: 10,
        aisle: 'Grain and Pasta'
}),
new Product({
     _id: 32,
    imagePath: '/images/grainandpastas/noodles.jpg',
    title:'Noodles',
    description: 'Noodles',
    price: 4,
        aisle: 'Grain and Pasta'
}),
new Product({
     _id: 33,
    imagePath: '/images/grainandpastas/quinoa.jpg',
    title:'Quinoa',
    description: 'Quinoa',
    price: 2,
        aisle: 'Grain and Pasta'
}),
new Product({
     _id: 34,
    imagePath: '/images/grainandpastas/swirlynoodles.jpg',
    title:'Swirlynoodles',
    description: 'They are quite swirly, so eat this carefully',
    price: 6,
        aisle: 'Grain and Pasta'
}),
new Product({
     _id: 35,
    imagePath: '/images/grainandpastas/Tagliatelle.jpg',
    title:'Tagliatelle',
    description: 'Fancy name',
    price: 3,
        aisle: 'Grain and Pasta'
}),
new Product({
     _id: 36,
    imagePath: '/images/grainandpastas/whiterice.jpg',
    title:'Whiterice',
    description: 'Classic whiterice. Good for everything.for real.',
    price: 4,
        aisle: 'Grain and Pasta'
}),
new Product({
      _id: 37,
    imagePath: "/images/Snacks/Almonds.jpeg",
    title:'Almonds',
    description: 'Almonds',
    price: 4,
        aisle: 'Snacks'
}),
new Product({
      _id: 38,
    imagePath: "/images/Snacks/Cookies.jpeg",
    title:'Cookies',
    description: 'Cookies',
    price: 3,
        aisle: 'Snacks'
}),
new Product({
      _id: 39,
    imagePath: "/images/Snacks/Popcorn.jpeg",
    title:'Popcorn',
    description: 'popcorn',
    price: 6,
        aisle: 'Snacks'
}),
new Product({
      _id: 40,
    imagePath: "/images/Snacks/Doughnut.jpeg",
    title:'Doughnut',
    description: 'Doughnut',
    price: 2,
        aisle: 'Snacks'
}),
new Product({
      _id: 41,
    imagePath: "/images/Snacks/Sunflowerseeds.jpeg",
    title:'Sunflowerseeds',
    description: 'Sunflowerseeds',
    price: 4,
        aisle: 'Snacks'
}),
new Product({
      _id: 42,
    imagePath: "/images/Snacks/Yogurt.jpeg",
    title:'Yogurt',
    description: 'Yogurt',
    price: 2,
        aisle: 'Snacks'
}),
new Product({
    _id: 43,
    imagePath: "/images/MeatandSeafood/steak.jpeg",
    title:'Steak',
    description: 'Steak',
    price: 12,
        aisle: 'Meat and Seafood'
}),
new Product({
    _id: 44,
    imagePath: "/images/MeatandSeafood/salmon.jpeg",
    title:'Salmon',
    description: 'Salmon',
    price: 20,
        aisle: 'Meat and Seafood'
}),
new Product({
    _id: 45,
    imagePath: "/images/MeatandSeafood/chicken.jpeg",
    title:'Chicken',
    description: 'Chicken',
    price: 8,
        aisle: 'Meat and Seafood'
}),
new Product({
    _id: 46,
    imagePath: "/images/MeatandSeafood/groundbeef.jpeg",
    title:'Groundeef',
    description: 'Groundeef',
    price: 14,
        aisle: 'Meat and Seafood'
}),
new Product({
    _id: 47,
    imagePath: "/images/MeatandSeafood/crab.jpeg",
    title:'Crab',
    description: 'Crab',
    price: 25,
        aisle: 'Meat and Seafood'
}),
new Product({
    _id: 48,
    imagePath: "/images/MeatandSeafood/shrimp.jpeg",
    title:'Shrimp',
    description: 'Shrimp',
    price: 8,
        aisle: 'Meat and Seafood'
}),
new Product({
    _id: 49,
    imagePath: "/images/cereal/fruitloops.jpg",
    title:'Fruitloops',
    description: 'Fruitloops!',
    price: 6,
        aisle: 'Cereal'
}),
new Product({
    _id: 50,
    imagePath: "/images/cereal/cornflakes.jpg",
    title:'Cornflakes',
    description: 'Cornflakes!',
    price: 4,
        aisle: 'Cereal'
}),
new Product({
    _id: 51,
    imagePath: "/images/cereal/chocolatecereal.jpg",
    title:'Chololatecereal',
    description: 'Chololatecereal!',
    price: 8,
        aisle: 'Cereal'
}),
new Product({
    _id: 52,
    imagePath: "/images/cereal/raisinbran.jpg",
    title:'Raisinbran',
    description: 'Raisin!',
    price: 6,
        aisle: 'Cereal'
}),
new Product({
    _id: 53,
    imagePath: "/images/cereal/granola.jpg",
    title:'Granola',
    description: 'Granola!',
    price: 8,
        aisle: 'Cereal'
}),
new Product({
    _id: 54,
    imagePath: "/images/cereal/life.jpg",
    title:'Life',
    description: 'Life!',
    price: 10,
        aisle: 'Cereal'
}),
new Product({
    _id: 55,
    imagePath: "/images/cannedgoodsandsoup/blackbeans.jpg",
    title:'Blackbeans',
    description: 'Black beans for your soul',
    price: 1,
        aisle: 'Canned Goods'
}),
new Product({
    _id: 56,
    imagePath: '/images/cannedgoodsandsoup/chickennoodlesoup.jpg',
    title:'Chicken Noodle Soup',
    description: 'Soup for your wings',
    price: 2,
        aisle: 'Canned Goods'
}),
new Product({
    _id: 57,
    imagePath: '/images/cannedgoodsandsoup/spaghettiandmeatballs.png',
    title:'Spaghetti and Meatballs',
    description: 'This one is good. Believe me',
    price: 4,
        aisle: 'Canned Goods'
}),
new Product({
    _id: 58,
    imagePath: '/images/cannedgoodsandsoup/spam.jpg',
    title:'Spam',
    description: 'Salty yet awesome',
    price: 2,
        aisle: 'Canned Goods'
}),
new Product({
    _id: 59,
    imagePath: '/images/cannedgoodsandsoup/sweetcorn.jpeg',
    title:'Sweetcorn',
    description: 'Corn that is very sweet',
    price: 3,
        aisle: 'Canned Goods'
}),
new Product({
    _id: 60,
    imagePath: '/images/cannedgoodsandsoup/veggyandbeef.jpg',
    title:'Veggy and Beef Soup',
    description: 'Serve it hot and everything is good',
    price: 2,
        aisle: 'Canned Goods'
}),
new Product({
    _id: 61,
    imagePath: '/images/greens/freshraw/brocolli.jpg',
    title:'Brocolli',
    description: 'Brocolli for your brain',
    price: 2,
        aisle: 'Fresh Raw'
}),
new Product({
    _id: 62,
    imagePath: '/images/greens/freshraw/carrot.jpg',
    title:'Carrot',
    description: 'Carrot for your eyes',
    price: 1,
        aisle: 'Fresh Raw'
}),
new Product({
    _id: 63,
    imagePath: '/images/greens/freshraw/celery.jpg',
    title:'Celery',
    description: 'Celery for your tummy',
    price: 1,
        aisle: 'Fresh Raw'
}),
new Product({
    _id: 64,
    imagePath: '/images/greens/freshcooking/zucchini.jpg',
    title:'Zucchini',
    description: 'Zucchini good for you',
    price: 2,
        aisle: 'Fresh Cooking'
}),
new Product({
    _id: 65,
    imagePath: '/images/greens/freshcooking/mushroom.jpg',
    title:'Mushroom',
    description: 'Good for the taste',
    price: 1,
        aisle: 'Fresh Cooking'
}),
new Product({
    _id: 66,
    imagePath: '/images/greens/freshcooking/squash.jpg',
    title:'Squash',
    description: 'Good in general',
    price: 3,
        aisle: 'Fresh Cooking'
}),
new Product({
    _id: 67,
    imagePath: '/images/greens/freshleafy/spinach.png',
    title:'Spinach',
    description: 'Spinach good for instant muscles',
    price: 39,
        aisle: 'Fresh Leafy'
}),
new Product({
    _id: 68,
    imagePath: '/images/greens/freshleafy/butterletuce.png',
    title:'Butterletuce',
    description: 'More veggy version of rice',
    price: 4,
        aisle: 'Fresh Leafy'
}),
new Product({
    _id: 69,
    imagePath: '/images/greens/freshleafy/romaine.jpg',
    title:'Romaine',
    description: 'Veggy version of ramen?',
    price: 5,
        aisle: 'Fresh Leafy'
}),
new Product({
    _id: 70,
    imagePath: '/images/greens/special/burger.jpg',
    title:'Veggy burger',
    description: 'Don\'t be fooled, but this is as good as the real thing',
    price: 19,
        aisle: 'Special'
}),
new Product({
    _id: 71,
    imagePath: '/images/greens/special/pizza.jpg',
    title:'Veggy pizza',
    description: 'If you need to share your green life',
    price: 29,
        aisle: 'Special'
}),
new Product({
    _id: 72,
    imagePath: '/images/greens/special/vegancookie.jpg',
    title:'Veggy cookies',
    description: 'If you need some sweet stuff in your life',
    price: 4,
        aisle: 'Special'
}),
new Product({
    _id: 73,
    imagePath: '/images/greens/frozen/corn.jpeg',
    title:'Corn',
    description: 'This one is supper awesome and sweet',
    price: 4,
        aisle: 'Frozen'
}),
new Product({
    _id: 74,
    imagePath: '/images/greens/frozen/peas.jpeg',
    title:'Peas',
    description: 'Peas be with you',
    price: 4,
        aisle: 'Frozen'
}),
new Product({
    _id: 75,
    imagePath: '/images/greens/frozen/asparagus.jpeg',
    title:'Asparagus',
    description: 'Good for your esophagus and overall being',
    price: 4,
        aisle: 'Frozen'
})


];

    db.collection("products").insertMany(products, function(err,res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
})
