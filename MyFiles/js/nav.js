const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	
	// when the burger is clicked use function below 
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		//burger animation
		burger.classList.toggle('toggle');
	});	

	// when the nav is clicked use function below 
	nav.addEventListener('click', () => {
		nav.classList.remove('nav-active');

		//burger animation
		burger.classList.toggle('toggle');
	});
}
 
navSlide();