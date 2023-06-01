import { getProductImage } from "./renderMenu.js";

export default function productCard() {
	// This sets every product card as hidden by default
	let activeProductCard = null;

	// Imports the product list items into javascript 
	const productItemButtons = document.querySelectorAll('.product__list-item');
	const productImages = getProductImage();

	// Gets the button id and the product card id, so that the right button and product card is linked together
	productItemButtons.forEach((productItemButton) => {
		const buttonId = productItemButton.getAttribute('button-id');
		const matchingProductCardId = document.querySelector(`[card-id="${buttonId}"]`);
	
		// An eventListener gives the buttons function, and for every click, a product card will toggle, making sure to display the correct product card
		productItemButton.addEventListener('click', () => {
			toggleProductCard(matchingProductCardId);
		});
	});

	// This function will toggle the product card. If the product card clicked is the active product card, it will be hidden
	function toggleProductCard(productCard) {
		if (activeProductCard === productCard) {
			activeProductCard = null;
			productCard.classList.remove('product__list-item-card--active');
			// I tried to give a specific styling to the active product-card, but I couldn't do it
			// productImages.classList.remove('product__list-item-info-image--active');

		} else {
			if (activeProductCard) {
				activeProductCard.classList.remove('product__list-item-card--active');
			}

			// If the product card clicked is not already active, it will add the styling which displayes the product card
			activeProductCard = productCard;
			productCard.classList.add('product__list-item-card--active');
			// I tried to give a specific styling to the active product-card, but I couldn't do it
			// productImages.classList.add('product__list-item-info-image--active');
		}
	}	
}

productCard();

