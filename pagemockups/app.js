
var shopper = {
	firstName: "John",
	history: ["apples", "oranges","cherries"]
};
function addToHistory(added){
	shopper.history.push(added);
}


function displayHistory(){
	var text = "<ul>";
	for(var i = 0; i < shopper.history.length; i++){
		text += "<li>" + shopper.history[i] + "</li>";
	}
	text += "</ul>";
	document.getElementById("myBox").innerHTML = text;
}