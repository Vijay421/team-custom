window.onload = () => {
	setInitialColor();
};

function setInitialColor() {
	const elements = document.querySelectorAll('.payment-detail__profile-initials');
	for(const initials of elements){
		initials.style.backgroundColor = initials.dataset.backcolor;
		initials.style.color = initials.dataset.lettercolor; 
		initials.style.borderColor = initials.dataset.backcolor;
	}
}