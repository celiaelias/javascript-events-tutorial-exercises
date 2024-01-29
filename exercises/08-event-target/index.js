window.onload = function loadFn() {
	let containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		// Your code here
		let containerElm = event.target;
		
		alert(containerElm.getAttribute("id"));
	});
};
