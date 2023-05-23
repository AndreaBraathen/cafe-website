import { getProductImage } from "./renderMenu.js";

export default function productCard() {
	let activeProductCard = null;

	const productItemButtons = document.querySelectorAll('.product__list-item');
	const productImages = getProductImage();


	productItemButtons.forEach((productItemButton) => {
		const buttonId = productItemButton.getAttribute('button-id');
		const matchingProductCardId = document.querySelector(`[card-id="${buttonId}"]`);
	
		productItemButton.addEventListener('click', () => {
			toggleProductCard(matchingProductCardId);
		});
	});

	function toggleProductCard(productCard) {
		if (activeProductCard === productCard) {
			activeProductCard = null;
			productCard.classList.remove('product__list-item-card--active');
			// productImages.classList.remove('product__list-item-info-image--active');

		} else {
			if (activeProductCard) {
				activeProductCard.classList.remove('product__list-item-card--active');
			}

			activeProductCard = productCard;
			productCard.classList.add('product__list-item-card--active');
			// productImages.classList.add('product__list-item-info-image--active');
		}
	}	
}

productCard();

