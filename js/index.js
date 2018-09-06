window.onload = () => {
	setInitialColor();
	
};

function setInitialColor() {
	const elements = document.querySelectorAll('.payment-detail__border');
	for(const circle of elements){
		circle.childNodes[1].style.color = circle.childNodes[1].dataset.lettercolor;
		circle.style.backgroundColor = circle.childNodes[1].dataset.backcolor;
	}
}