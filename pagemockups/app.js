function GroceryItem(title, url, dollars, oldPrice, isNew){
	this.name = title;
	this.imgURL = url;
	this.price = dollars;
	this.oldPrice = oldPrice;
	this.isNew = isNew;
}

//Beverages Aisle
var appleJuice = new GroceryItem("Apple Juice", "assets/img/products/Beverages/product-06.jpg", 4.99, 6.99, new Boolean(true));
var pepsi = new GroceryItem('Pepsi', 'assets/img/products/Beverages/product-02.jpg', 3.49, 4.99, new Boolean(false));
var sunkist = new GroceryItem('Sunkist' , 'assets/img/products/Beverages/product-03.jpg', 3.49, 4.99, new Boolean(false));
var coffee = new GroceryItem('Coffe', 'assets/img/products/Beverages/product-04.jpg',5.99, 7.49, new Boolean(false));
var tea = new GroceryItem('Tea','assets/img/products/Beverages/product-05.jpg',3.49, 3.99, new Boolean(false));
var water = new GroceryItem('Water','assets/img/products/Beverages/product-01.jpg',0.99, 1.49, new Boolean(false));
var bevInventory = [appleJuice, pepsi, sunkist, coffee, tea, water];

//Bread and Bakery Aisle
var hotDogBuns = new GroceryItem("Hot Dog Buns", "assets/img/products/BreadAndBakery/product-06.jpg", 2.99, 3.99, new Boolean(false));
var hamburgerBuns = new GroceryItem('Hamburger Buns', 'assets/img/products/BreadAndBakery/product-02.jpg', 3.49, 4.99, new Boolean(false));
var cake = new GroceryItem('Cake' , 'assets/img/products/BreadAndBakery/product-03.jpg', 3.49, 4.99, new Boolean(false));
var applePie = new GroceryItem('Apple Pie', 'assets/img/products/BreadAndBakery/product-04.jpg',5.99, 7.49, new Boolean(false));
var bagels = new GroceryItem('Bagels','assets/img/products/BreadAndBakery/product-05.jpg',3.49, 3.99, new Boolean(false));
var sandwichBread = new GroceryItem('Sandwich Bread','assets/img/products/BreadAndBakery/product-01.jpg',0.99, 1.49, new Boolean(false));
var bnbInventory = [hotDogBuns, hamburgerBuns, cake, applePie, bagels, sandwichBread];

//Breakfast Cereal Aisle
var cheerios = new GroceryItem("Cheerios", "assets/img/products/BreadAndBakery/product-06.jpg", 2.99, 3.99, new Boolean(false));
var ctCrunch = new GroceryItem('Cinnamon Toast Crunch', 'assets/img/products/BreadAndBakery/product-02.jpg', 3.49, 4.99, new Boolean(false));
var frootLoops = new GroceryItem('Froot Loops' , 'assets/img/products/BreadAndBakery/product-03.jpg', 3.49, 4.99, new Boolean(false));
var kix = new GroceryItem('Kix', 'assets/img/products/BreadAndBakery/product-04.jpg',5.99, 7.49, new Boolean(false));
var cocoaPuffs = new GroceryItem('Cocoa Puffs','assets/img/products/BreadAndBakery/product-05.jpg',3.49, 3.99, new Boolean(false));
var riceKrispies = new GroceryItem('Rice Krispies','assets/img/products/BreadAndBakery/product-01.jpg',0.99, 1.49, new Boolean(false));
var bfcInventory = [cheerios, ctCrunch, frootLoops, kix, cocoaPuffs, riceKrispies];

//Canned Goods Aisle
var corn = new GroceryItem("Corn", "assets/img/products/BreadAndBakery/product-06.jpg", 2.99, 3.99, new Boolean(false));
var beans = new GroceryItem('Beans', 'assets/img/products/BreadAndBakery/product-02.jpg', 3.49, 4.99, new Boolean(false));
var clamChowder = new GroceryItem('Clam Chowder' , 'assets/img/products/BreadAndBakery/product-03.jpg', 3.49, 4.99, new Boolean(false));
var chickenNoodle = new GroceryItem('Chicken Noodle Soup', 'assets/img/products/BreadAndBakery/product-04.jpg',5.99, 7.49, new Boolean(false));
var pineapples = new GroceryItem('Canned Pineapples','assets/img/products/BreadAndBakery/product-05.jpg',3.49, 3.99, new Boolean(false));
var appleSauce = new GroceryItem('Apple Sauce','assets/img/products/BreadAndBakery/product-01.jpg',0.99, 1.49, new Boolean(false));
var cngInventory = [corn, beans, clamChowder, chickenNoodle, pineapples, appleSauce];

//Cookies, Snacks, Candy Aisle
var cookies = new GroceryItem("Cookies", "assets/img/products/BreadAndBakery/product-06.jpg", 2.99, 3.99, new Boolean(false));
var doritos = new GroceryItem('Doritos', 'assets/img/products/BreadAndBakery/product-02.jpg', 3.49, 4.99, new Boolean(false));
var lays = new GroceryItem('Lays' , 'assets/img/products/BreadAndBakery/product-03.jpg', 3.49, 4.99, new Boolean(false));
var snickers = new GroceryItem('Snickers', 'assets/img/products/BreadAndBakery/product-04.jpg',5.99, 7.49, new Boolean(false));
var twix = new GroceryItem('Twix','assets/img/products/BreadAndBakery/product-05.jpg',3.49, 3.99, new Boolean(false));
var reeses = new GroceryItem('Reeses','assets/img/products/BreadAndBakery/product-01.jpg',0.99, 1.49, new Boolean(false));
var cscInventory = [cookies, doritos, lays, snickers, twix, reeses];

//Dairy and Eggs Aisle
var milk = new GroceryItem("Milk", "assets/img/products/BreadAndBakery/product-06.jpg", 2.99, 3.99, new Boolean(false));
var lowFatMilk = new GroceryItem('Low Fat Milk', 'assets/img/products/BreadAndBakery/product-02.jpg', 3.49, 4.99, new Boolean(false));
var brownEggs = new GroceryItem('Brown Eggs' , 'assets/img/products/BreadAndBakery/product-03.jpg', 3.49, 4.99, new Boolean(false));
var eggs = new GroceryItem('Eggs', 'assets/img/products/BreadAndBakery/product-04.jpg',5.99, 7.49, new Boolean(false));
var cheddar = new GroceryItem('Cheddar Cheese','assets/img/products/BreadAndBakery/product-05.jpg',3.49, 3.99, new Boolean(false));
var swiss = new GroceryItem('Swiss Cheese','assets/img/products/BreadAndBakery/product-01.jpg',0.99, 1.49, new Boolean(false));
var decInventory = [milk, lowFatMilk, brownEggs, eggs, cheddar, swiss];

//Fruit and Vegetable Aisle
var avocado = new GroceryItem("Avocado", "assets/img/products/FruitsAndVegetables/product-06.jpg", 0.99, 1.99, new Boolean(true));
var tangerines = new GroceryItem('Tangerines', 'assets/img/products/FruitsAndVegetables/product-02.jpg', 3.49, 4.99, new Boolean(false));
var pineapple = new GroceryItem('Pineapple' , 'assets/img/products/FruitsAndVegetables/product-03.jpg', 7.99, 9.99, new Boolean(true));
var pomegranate = new GroceryItem('Pomegranate', 'assets/img/products/FruitsAndVegetables/product-04.jpg',0.99, 1.99, new Boolean(false));
var papaya = new GroceryItem('Papaya','assets/img/products/FruitsAndVegetables/product-05.jpg',3.49, 3.99, new Boolean(false));
var apple = new GroceryItem('Apple','assets/img/products/FruitsAndVegetables/product-01.jpg',0.49, 0.99, new Boolean(false));
var fnvInventory = [avocado, tangerines, pineapple, pomegranate, papaya, apple];

//Grains, Pasta, and Sides
var jasmineRice = new GroceryItem("Jasmine Rice", "assets/img/products/BreadAndBakery/product-06.jpg", 2.99, 3.99, new Boolean(false));
var brownRice = new GroceryItem('Brown Rice', 'assets/img/products/BreadAndBakery/product-02.jpg', 3.49, 4.99, new Boolean(false));
var spaghetti = new GroceryItem('Spaghetti' , 'assets/img/products/BreadAndBakery/product-03.jpg', 3.49, 4.99, new Boolean(false));
var lasagna = new GroceryItem('Lasagna', 'assets/img/products/BreadAndBakery/product-04.jpg',5.99, 7.49, new Boolean(false));
var macaroni = new GroceryItem('Macaroni','assets/img/products/BreadAndBakery/product-05.jpg',3.49, 3.99, new Boolean(false));
var mashedPotatoes = new GroceryItem('Mashed Potatoes','assets/img/products/BreadAndBakery/product-01.jpg',0.99, 1.49, new Boolean(false));
var gpsInventory = [jasmineRice, brownRice, spaghetti, lasagna, macaroni, mashedPotatoes];

//Meat and Seafood Aisle
var ham = new GroceryItem("Ham", "assets/img/products/BreadAndBakery/product-06.jpg", 2.99, 3.99, new Boolean(false));
var bacon = new GroceryItem('Bacon', 'assets/img/products/BreadAndBakery/product-02.jpg', 3.49, 4.99, new Boolean(false));
var wings = new GroceryItem('Chicken Wings' , 'assets/img/products/BreadAndBakery/product-03.jpg', 3.49, 4.99, new Boolean(false));
var groundBeef = new GroceryItem('Ground Beef', 'assets/img/products/BreadAndBakery/product-04.jpg',5.99, 7.49, new Boolean(false));
var steak = new GroceryItem('Steak','assets/img/products/BreadAndBakery/product-05.jpg',3.49, 3.99, new Boolean(false));
var chickenBreast = new GroceryItem('Chicken Breast','assets/img/products/BreadAndBakery/product-01.jpg',0.99, 1.49, new Boolean(false));
var mnsInventory = [ham, bacon, wings, groundBeef, steak, chickenBreast];

//Personal Care Aisle
var toothpaste = new GroceryItem("Toothpaste", "assets/img/products/BreadAndBakery/product-06.jpg", 2.99, 3.99, new Boolean(false));
var deodorant = new GroceryItem('Deodorant', 'assets/img/products/BreadAndBakery/product-02.jpg', 3.49, 4.99, new Boolean(false));
var toothbrush = new GroceryItem('Toothbrush' , 'assets/img/products/BreadAndBakery/product-03.jpg', 3.49, 4.99, new Boolean(false));
var tylenol = new GroceryItem('Tylenol', 'assets/img/products/BreadAndBakery/product-04.jpg',5.99, 7.49, new Boolean(false));
var razors = new GroceryItem('Razors','assets/img/products/BreadAndBakery/product-05.jpg',3.49, 3.99, new Boolean(false));
var shampoo = new GroceryItem('Shampoo','assets/img/products/BreadAndBakery/product-01.jpg',0.99, 1.49, new Boolean(false));
var pscInventory = [toothpaste, deodorant, toothbrush, tylenol, razors, shampoo];

var inventory = {
	bev: bevInventory,
	bnb: bnbInventory,
	bfc: bfcInventory,
	cng: cngInventory,
	csc: cscInventory,
	dec: decInventory,
	fnv: fnvInventory,
	gps: gpsInventory,
	mns: mnsInventory,
	psc: pscInventory
}


var shopper = {
	firstName: "John",
	shoppingCart: [],
	history: [avocado, apple , pineapple ,pomegranate]
};
/*
var photoToItemName = new Map();
	photoToItemName.set('Avocado','assets/img/products/product-06.jpg' );
	photoToItemName.set('Tangerines', 'assets/img/products/product-02.jpg');
	photoToItemName.set('Pineapple' , 'assets/img/products/product-03.jpg');
	photoToItemName.set('Pomegranate', 'assets/img/products/product-04.jpg');
	photoToItemName.set('Papaya','assets/img/products/product-05.jpg');
	photoToItemName.set('Apple','assets/img/products/product-01.jpg');
*/
function addToHistory(added){
	shopper.history.push(added);
}

function addToCart(index){
	shopper.shoppingCart.push(shopper.history[index]);
	document.getElementById("shoppingCartNumber").innerHTML = shopper.shoppingCart.length;
	//alert(shopper.history[index].name + " added");
}

function displayItems(aisle){
	var text = "<div class='container-fluid' id='" + aisle +"'>" +
		"<div class='row flex-list'>";

	var aisleInventory = inventory[aisle];
	for(var i = 0; i < aisleInventory.length; i++){
		var gi = aisleInventory[i];
		var gName = gi.name;
		var gUrl = gi.imgURL;
		var gPrice = gi.price;
		var gOld = gi.oldPrice;
		var gNew = gi.isNew;
		text += "<div class='col-md-4 col-sm-6'>"+
			"<div class='product-item'>" +
			"<div class='product-item-thumbnail text-center mb-15'>" +
			"<a class='product-item-thumbnail-link' href='#'></a>";
			if(gNew == true){
				text += "<span class='product-item-thumbnail-label'>new</span>";
			}
			text += "<img src='" + gUrl + "' class='img-responsive' alt='product image'>"+
				"<div class='product-item-thumbnail-overlay'>" +
				"<a href='#' class='btn btn-default pulse'><span class='ti-heart mr-0'></span></a>" +
				"<a href='#'' class='btn btn-primary'>add to cart</a>" +
				"</div>" +
				"</div>" +
				"<div class='row'>" +
				"<div class='col-xs-6'>" +
				"<a class='h5' href='#'>" + gName + "</a>" +
				"</div>" +
				"<div class='col-xs-6 text-right'>" +
				"<del class='h5 text-muted product-item-price-old'>" + gOld + "</del>" +
				"<span class='h5 product-item-price'> " + gPrice + "</span>"+
				"</div></div></div></div>";

	}

	document.getElementById("Products").innerHTML = text;

}

function openShoppingCart(){
	var text = "<table style ='margin-top:30px' border='1'>";
	text += "<tr  > <th style='background-color :#4CAF50'> Item </th> <th style='background-color:#4CAF50'> Price</th> </tr> ";
	for(var i =0; i < shopper.shoppingCart.length;i++){
		text += "<tr>";
		text += "<td width=100 height=100>" 
				+ shopper.shoppingCart[i].name
				+"</td>"
				+"<td width=100 height=100>"
				+ shopper.shoppingCart[i].price
				+ "</td>"
				+"</tr>";
	}
	text += "</table";

	
	document.getElementById("filters").innerHTML = " ";
	document.getElementById("sorter").innerHTML = " ";
	document.getElementById("myBox").innerHTML = text;
	setTotal();
}

function setTotal(){
	var newText 	 =	"Total: ";
	var runningTotal = 	0;
	for(var i=0;i<shopper.shoppingCart.length;i++){
		runningTotal += shopper.shoppingCart[i].price;
	}
	newText += runningTotal;
	document.getElementById("filters").innerHTML = newText;
}

function displayHistory(){
	var text = "<table>";
	text += "<tr> <th > Item </th> <th>Photo</th> </tr> ";
	for(var i = 0; i < shopper.history.length; i++){
		text += "<tr>"
		text += "<td width=100 height=200>"
				+ shopper.history[i].name
				+ "</td>"
				+ "<td width=200 height=200>"
				+ "<img src = '"
				+ shopper.history[i].imgURL
				+ "' align='center' width='100%' height='100%' alt = 'image'>"
				+ "</td>"
				+ "<td>"
				+ shopper.history[i].price
				+ "</td>"
				+ "<td>"
				+ "<button type = 'button'"
				+ " onclick="
				+ "addToCart('"
				+ i +"')"
				+ ">Add To Cart</button>"
				+ "</td>"
				+ "</tr>"
	}
		text += "</table>";

	document.getElementById("myBox").innerHTML = text;
}
