var list = document.getElementsByClassName("navbar");

const items = document.getElementsByClassName("navbar__item");

for (const i in items) {
	items[i].addEventListener("click", function() {
		const current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
