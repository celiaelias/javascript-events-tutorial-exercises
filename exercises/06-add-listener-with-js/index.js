window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	document.getElementById("theGreen").addEventListener("click", greenButton);
	
	
};

// The listener function here
function greenButton() {
	alert("woohoo");
}
