window.onload = () => {
	setInitialColor();
};

function setInitialColor() {
	const elements = document.querySelectorAll('.payment-detail__border');
	for(const initials of elements){
		console.log(initials.childNodes[1].dataset.backcolor);
		initials.childNodes[1].style.color = initials.childNodes[1].dataset.lettercolor;
		initials.style.backgroundColor = initials.childNodes[1].dataset.backcolor;
	}
}