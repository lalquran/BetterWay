function GroceryItem(title, url, dollars){
	this.name = title;
	this.imgURL = url;
	this.price = dollars;
}

var avocado = new GroceryItem("Avocado", "assets/img/products/product-06.jpg", 0.99);
var tangerines = new GroceryItem('Tangerines', 'assets/img/products/product-02.jpg', 3.49);
var pineapple = new GroceryItem('Pineapple' , 'assets/img/products/product-03.jpg', 7.99);
var pomegranate = new GroceryItem('Pomegranate', 'assets/img/products/product-04.jpg',0.99);
var papaya = new GroceryItem('Papaya','assets/img/products/product-05.jpg',3.49);
var apple = new GroceryItem('Apple','assets/img/products/product-01.jpg',0.49);

var storeInventory = [avocado, tangerines, pineapple, pomegranate, papaya, apple];

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

function displayHistory(){
	var text = "<table>"
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

