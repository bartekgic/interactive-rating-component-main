const submitBtn = document.querySelector('.submit-btn');
const evalMark = document.querySelectorAll('.evaluation-mark');
const panel1 = document.querySelector('.wrapper-1');
const panel2 = document.querySelector('.wrapper-2');
const spanMark = document.querySelector('.selected-mark-variable');

const submitFun = () => {
	evalMark.forEach(mark => {
		if (mark.classList.contains('active')) {
			panel1.classList.add('hide');
			panel2.classList.remove('hide');
		}
	});
};
const ratingFun = e => {
	let substitute = e.target;
	evalMark.forEach(el => {
		el.classList.remove('active');
	});
	substitute.classList.add('active');
	spanMark.textContent = substitute.textContent;
};

submitBtn.addEventListener('click', submitFun);
evalMark.forEach(mark => {
	mark.addEventListener('click', ratingFun);
});
