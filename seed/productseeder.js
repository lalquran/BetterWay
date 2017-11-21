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
    }),
    new Product({
    imagePath: "/images/PersonalCare/Lotion.jpeg",
    title:'Lotion',
    description: 'Lotion',
    price: 3
}),
    new Product({
     _id: 30,
    imagePath: "/images/grainandpastas/brownrice.jpg",
    title:'brownrice',
    description: 'eat and you shall fill yourself with fiber!!!',
    price: 10
}),
new Product({
     _id: 31,
    imagePath: '/images/grainandpastas/noodles.jpg',
    title:'noodles',
    description: 'noodles',
    price: 4
}),
new Product({
     _id: 32,
    imagePath: '/images/grainandpastas/quinoa.jpg',
    title:'quinoa',
    description: 'quinoa',
    price: 2
}),
new Product({
     _id: 33,
    imagePath: '/images/grainandpastas/swirlynoodles.jpg',
    title:'swirlynoodles',
    description: 'they are quite swirly, so eat this carefully',
    price: 6
}),
new Product({
     _id: 34,
    imagePath: '/images/grainandpastas/Tagliatelle.jpg',
    title:'Tagliatelle',
    description: 'fancy name',
    price: 3
}),
new Product({
     _id: 35,
    imagePath: '/images/grainandpastas/whiterice.jpg',
    title:'whiterice',
    description: 'classic whiterice. Good for everything.for real.',
    price: 4
}),
new Product({
      _id: 36,
    imagePath: "/images/Snacks/Almonds.jpeg",
    title:'Almonds',
    description: 'almonds',
    price: 4
}),
new Product({
      _id: 37,
    imagePath: "/images/Snacks/Cookies.jpeg",
    title:'Cookies',
    description: 'cookies',
    price: 3
}),
new Product({
      _id: 38,
    imagePath: "/images/Snacks/Popcorn.jpeg",
    title:'Popcorn',
    description: 'popcorn',
    price: 6
}),
new Product({
      _id: 39,
    imagePath: "/images/Snacks/Doughnut.jpeg",
    title:'Doughnut',
    description: 'Doughnut',
    price: 2
}),
new Product({
      _id: 40,
    imagePath: "/images/Snacks/Sunflowerseeds.jpeg",
    title:'Sunflowerseeds',
    description: 'Sunflowerseeds',
    price: 4
}),
new Product({
      _id: 41,
    imagePath: "/images/Snacks/Yogurt.jpeg",
    title:'Yogurt',
    description: 'Yogurt',
    price: 2
}),
new Product({
    _id: 42,
    imagePath: "/images/MeatandSeafood/steak.jpeg",
    title:'steak',
    description: 'steak',
    price: 12
}),
new Product({
    _id: 43,
    imagePath: "/images/MeatandSeafood/salmon.jpeg",
    title:'salmon',
    description: 'salmon',
    price: 20
}),
new Product({
    _id: 44,
    imagePath: "/images/MeatandSeafood/chicken.jpeg",
    title:'chicken',
    description: 'chicken',
    price: 8
}),
new Product({
    _id: 45,
    imagePath: "/images/MeatandSeafood/groundbeef.jpeg",
    title:'groundeef',
    description: 'groundeef',
    price: 14
}),
new Product({
    _id: 46,
    imagePath: "/images/MeatandSeafood/crab.jpeg",
    title:'crab',
    description: 'crab',
    price: 25
}),
new Product({
    _id: 47,
    imagePath: "/images/MeatandSeafood/shrimp.jpeg",
    title:'shrimp',
    description: 'shrimp',
    price: 8
}),
new Product({
    _id: 48,
    imagePath: "/images/cereal/fruitloops.jpg",
    title:'fruitloops',
    description: 'fruitloops!',
    price: 6
}),
new Product({
    _id: 49,
    imagePath: "/images/cereal/cornflakes.jpg",
    title:'cornflakes',
    description: 'cornflakes!',
    price: 4
}),
new Product({
    _id: 50,
    imagePath: "/images/cereal/chocolatecereal.jpg",
    title:'chololatecereal',
    description: 'chololatecereal!',
    price: 8
}),
new Product({
    _id: 51,
    imagePath: "/images/cereal/raisinbran.jpg",
    title:'raisinbran',
    description: 'raisin!',
    price: 6
}),
new Product({
    _id: 52,
    imagePath: "/images/cereal/granola.jpg",
    title:'granola',
    description: 'granola!',
    price: 8
}),
new Product({
    _id: 53,
    imagePath: "/images/cereal/life.jpg",
    title:'life',
    description: 'life!',
    price: 10
}),
new Product({
    _id: 54,
    imagePath: "/images/cannedgoodsandsoup/blackbeans.jpg",
    title:'blackbeans',
    description: 'black beans for your soul',
    price: 1
}),
new Product({
    _id: 55,
    imagePath: '/images/cannedgoodsandsoup/chickennoodlesoup.jpg',
    title:'chicken noodle soup',
    description: 'soup for your wings',
    price: 2
}),
new Product({
    _id: 56,
    imagePath: '/images/cannedgoodsandsoup/spaghettiandmeatballs.png',
    title:'spaghetti and meatballs',
    description: 'this one is good. Believe me',
    price: 4
}),
new Product({
    _id: 57,
    imagePath: '/images/cannedgoodsandsoup/spam.jpg',
    title:'spam',
    description: 'salty yet awesome',
    price: 2
}),
new Product({
    _id: 58,
    imagePath: '/images/cannedgoodsandsoup/sweetcorn.jpeg',
    title:'sweetcorn',
    description: 'corn that is very sweet',
    price: 3
}),
new Product({
    _id: 59,
    imagePath: '/images/cannedgoodsandsoup/veggyandbeef.jpg',
    title:'veggy and beef soup',
    description: 'serve it hot and everything is good',
    price: 2
}),
new Product({
    _id: 60,
    imagePath: '/images/greens/freshraw/brocolli.jpg',
    title:'brocolli',
    description: 'brocolli for your brain',
    price: 2
}),
new Product({
    _id: 61,
    imagePath: '/images/greens/freshraw/carrot.jpg',
    title:'carrot',
    description: 'brocolli for your eyes',
    price: 1
}),
new Product({
    _id: 62,
    imagePath: '/images/greens/freshraw/celery.jpg',
    title:'celery',
    description: 'celery for your tummy',
    price: 1
}),
new Product({
    _id: 63,
    imagePath: '/images/greens/freshcooking/zucchini.jpg',
    title:'zucchini',
    description: 'zucchini good for you',
    price: 2
}),
new Product({
    _id: 64,
    imagePath: '/images/greens/freshcooking/mushroom.jpg',
    title:'mushroom',
    description: 'good for the taste',
    price: 1
}),
new Product({
    _id: 65,
    imagePath: '/images/greens/freshcooking/squash.jpg',
    title:'squash',
    description: 'good in general',
    price: 3
}),
new Product({
    _id: 66,
    imagePath: '/images/greens/freshleafy/spinach.png',
    title:'spinach',
    description: 'spinach good for instant muscles',
    price: 39
}),
new Product({
    _id: 67,
    imagePath: '/images/greens/freshleafy/butterletuce.png',
    title:'butterletuce',
    description: 'more veggy version of rice',
    price: 4
}),
new Product({
    _id: 68,
    imagePath: '/images/greens/freshleafy/romaine.jpg',
    title:'romaine',
    description: 'veggy version of ramen?',
    price: 5
}),
new Product({
    _id: 69,
    imagePath: '/images/greens/special/burger.jpg',
    title:'Veggy burger',
    description: 'Don\'t be fooled, but this is as good as the real thing',
    price: 19
}),
new Product({
    _id: 70,
    imagePath: '/images/greens/special/pizza.jpg',
    title:'Veggy pizza',
    description: 'If you need to share your green life',
    price: 29
}),
new Product({
    _id: 71,
    imagePath: '/images/greens/special/vegancookie.jpg',
    title:'Veggy cookies',
    description: 'If you need some sweet stuff in your life',
    price: 4
})
];

    db.collection("products").insertMany(products, function(err,res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
})
