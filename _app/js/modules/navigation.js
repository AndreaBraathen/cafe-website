export default function() {

	// The Navigation is not visible on default
	let navigationVisible = false;

	// Imports the menu-button and the navigation into javascript 
	const navigationButton = document.querySelector('.navigation__banner-icon-menu');
	const navigationMenu = document.querySelector('.navigation__menu');

	// Adds an eventListener, which makes javascript 'listen' after clicks on the navigation button
	navigationButton.addEventListener('click', handleNavigationButtonClick); 

	// When the button is clicked the toggleNavigation-function and the renderHTML-function will run
	function handleNavigationButtonClick(event) {
		toggleNavigation();
		renderHTML();
	}

	// This function makes the navigation toggle between visible and hidden. 
	function toggleNavigation() {
		navigationVisible = !navigationVisible;
	}

	// This function adds and removes the class that makes the navigation visible
	function renderHTML() {
		if(navigationVisible === true) {
			navigationMenu.classList.add('navigation__menu--visible');
		} else {
			navigationMenu.classList.remove('navigation__menu--visible');
		}
	}







}