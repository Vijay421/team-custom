var list = document.getElementsByClassName("navbar__list");

var items = document.getElementsByClassName("navbar__link");

for (var i = 0;  i < items.length; i++) {
	items[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
