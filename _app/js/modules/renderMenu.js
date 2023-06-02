// import productCard from "./productCard.js";

export default function renderMenu(products) {
	const menuList = document.querySelector('.product__list');

	if (menuList) {

		// Creates DOM-elements
		for (const product of products) {
			const productItemButton = document.createElement('button');
			const productImage = document.createElement('img');
			const productName = document.createElement('div');
	
			const productTitle = document.createElement('div');
			const productCardElement = document.createElement('div');
			const productCardInformation = document.createElement('div');
			const productHeadline = document.createElement('div');
			const productPrice = document.createElement('div');
			const productCardImage = document.createElement('img');
	
			const productDescription = document.createElement('div');
			const productDescriptionTitle = document.createElement('h3');
			const productDescriptionInfo = document.createElement('p');
	
			const productIngredient = document.createElement('div');
			const productIngredientTitle = document.createElement('h3');
			const productIngredientInfo = document.createElement('p');
	
			const productAllergens = document.createElement('div');
			const productAllergensTitle = document.createElement('h3');
			const productAllergensType = document.createElement('div');
	
			const productMayContain = document.createElement('div');
			const productMayContainTitle = document.createElement('h3');
			const productMayContainAllergens = document.createElement('div');
	
			// Gives each DOM-element a class-name
			productItemButton.classList.add('product__list-item');
			productImage.classList.add('product__list-item-info-image');
			productName.classList.add('product__list-item-info-name');
	
			productCardElement.classList.add('product__list-item-card');
			productCardInformation.classList.add('product__list-item-card-information')
			productHeadline.classList.add('product__list-item-card-information-headline');
			productTitle.classList.add('product__list-item-card-information-title');
			productPrice.classList.add('product__list-item-card-information-price');
			productCardImage.classList.add('product__list-item-card-image');
	
			productDescription.classList.add('product__list-item-card-information-description')
			productDescriptionTitle.classList.add('product__list-item-card-information-description-title');
			productDescriptionInfo.classList.add('product__list-item-card-information-description-info');
	
			productIngredient.classList.add('product__list-item-card-information-ingredient')
			productIngredientTitle.classList.add('product__list-item-card-information-ingredient-title');
			productIngredientInfo.classList.add('product__list-item-card-information-ingredient-info');
	
			productAllergens.classList.add('product__list-item-card-information-allergens');
			productAllergensTitle.classList.add('product__list-item-card-information-allergens-title');
			productAllergensType.classList.add('product__list-item-card-information-allergens-info');
	
			productMayContain.classList.add('product__list-item-card-information-may-contain');
			productMayContainTitle.classList.add('product__list-item-card-information-may-contain-title');
			productMayContainAllergens.classList.add('product__list-item-card-information-may-contain-info');
	
			// Gives the DOM-element the fetched data from Sanity
			productImage.setAttribute('src', product.image);
			productImage.setAttribute('alt', product.alternativeText);
			productName.innerText = product.name;
			productTitle.innerText = product.name;
			productPrice.innerText = `$ ${product.price}0`;
			productCardImage.setAttribute('src', product.image);
			productCardImage.setAttribute('alt', product.alternativeText);
			
			productDescriptionTitle.innerText = 'Description:';
			productDescriptionInfo.innerText = product.description;
			productIngredientTitle.innerText = 'Ingredients:';
			productIngredientInfo.innerText = product.ingredients;
			productAllergensTitle.innerText = 'Allergens:';
			productAllergensType.innerText = product.allergens;
			productMayContainTitle.innerText = 'May contain traces of:'
			productMayContainAllergens.innerText = product.mayContainTracesOf;
	
			// Creates a rule that when there are no information, there are no headlines present either
			if (product.description === null) {
				productDescription.hidden = true;
			}
	
			if (product.ingredients === null) {
				productIngredient.hidden = true;
			}
	
			if (product.allergens === null) {
				productAllergens.hidden = true;		
			}
	
			if (product.mayContainTracesOf === null) {
				productMayContain.hidden = true;
			}
	
			// This is the ids for the product card 
			productItemButton.setAttribute('button-id', product._id);
			productCardElement.setAttribute('card-id', product._id);
	
			// Places the different elements in the DOM to render a product list section 
			menuList.append(
				productItemButton,
				productCardElement,
			);
	
			productItemButton.append(
				productImage,
				productName,
			);
	
			productHeadline.append(
				productTitle, 
				productPrice,
			);
	
			productCardElement.append(
				productCardImage,
				productCardInformation,	
			);
	
			productCardInformation.append(
				productHeadline,
				productDescription,
				productIngredient, 
				productAllergens, 
				productMayContain,
			)
	
			productDescription.append(
				productDescriptionTitle, 
				productDescriptionInfo,
			);
	
			productIngredient.append(
				productIngredientTitle,
				productIngredientInfo,
			)
	
			productAllergens.append(
				productAllergensTitle, 
				productAllergensType,
			);
	
			productMayContain.append(
				productMayContainTitle, 
				productMayContainAllergens,
			);
		}
	}
}

export function getProductImage() {
	return document.querySelectorAll('.product__list-item-info-image');
}