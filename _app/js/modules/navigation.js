export default function() {

	let navigationVisible = false;

	const navigationButton = document.querySelector('.navigation__banner-icon-menu');
	const navigationMenu = document.querySelector('.navigation__menu');


	navigationButton.addEventListener('click', handleNavigationButtonClick); 

	function handleNavigationButtonClick(event) {
		toggleNavigation();
		renderHTML();
	}

	function toggleNavigation() {
		navigationVisible = !navigationVisible;
	}

	function renderHTML() {
		if(navigationVisible === true) {
			navigationMenu.classList.add('navigation__menu--visible');
		} else {
			navigationMenu.classList.remove('navigation__menu--visible');
		}
	}







}