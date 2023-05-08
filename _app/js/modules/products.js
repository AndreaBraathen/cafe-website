import { sanity } from "../sanity.js";

export default async function products() {
	const query = `*[_type in ["food", "hotDrink", "coldDrink"]] {
		name,
		description,
		'mayContainTracesOf': mayContainTracesOf[]->typeOfAllergen,
		'category': category[]->typeOfFood,
		'allergens': allergens[]->typeOfAllergen,
		price,
		'image': image.asset->url
	 }`;

	const products = await sanity.fetch(query);
	const menu = document.querySelector('.product');
	const menuList = document.querySelector('.product__list');
	document.body.appendChild(menu);
	menu.append(menuList);

	function renderHTML() {
		for (const product of products) {
			const productItem = document.createElement('div');
			const productImage = document.createElement('img');
			const productName = document.createElement('div');

			const productTitle = document.createElement('div');
			const productCard = document.createElement('div');
			const productPrice = document.createElement('div');

			const productDescription = document.createElement('div');
			const productDescriptionTitle = document.createElement('h3');
			const productDescriptionInfo = document.createElement('p');

			const productAllergens = document.createElement('div');
			const productAllergensTitle = document.createElement('h3');
			const productAllergensType = document.createElement('div');

			const productMayContain = document.createElement('div');
			const productMayContainTitle = document.createElement('h3');
			const productMayContainAllergens = document.createElement('div');

			productItem.classList.add('product__list-item');
			productImage.classList.add('product__list-item-info-image');
			productName.classList.add('product__list-item-info-name');

			productCard.classList.add('product__list-item-card');
			productTitle.classList.add('product__list-item-card-title');
			productPrice.classList.add('product__list-item-card-price');

			productDescription.classList.add('product__list-item-card-description')
			productDescriptionTitle.classList.add('product__list-item-card-description-title');
			productDescriptionInfo.classList.add('product__list-item-card-description-info');

			productAllergens.classList.add('product__list-item-card-allergens');
			productAllergensTitle.classList.add('product__list-item-card-allergens-title');
			productAllergensType.classList.add('product__list-item-card-allergens-info');

			productMayContain.classList.add('product__list-item-card-may-contain');
			productMayContainTitle.classList.add('product__list-item-card-may-contain-title');
			productMayContainAllergens.classList.add('product__list-item-card-may-contain-info');

			productImage.setAttribute('src', product.image);
			productName.innerText = product.name;
			productTitle.innerText = product.name;
			productPrice.innerText = `$ ${product.price}0`;
			productDescriptionTitle.innerText = 'Description:';
			productDescriptionInfo.innerText = product.description;
			productAllergensTitle.innerText = 'Allergens:';
			productAllergensType.innerText = product.allergens;
			productMayContainTitle.innerText = 'May contain traces of:'
			productMayContainAllergens.innerText = product.mayContainTracesOf;

			menuList.append(
				productItem,
				productCard
			);

			productItem.append(
				productImage,
				productName,
			);

			productCard.append(
				productTitle, 
				productPrice, 
				productDescription, 
				productAllergens, 
				productMayContain
			);

			productDescription.append(
				productDescriptionTitle, 
				productDescriptionInfo
			);

			productAllergens.append(
				productAllergensTitle, 
				productAllergensType
			);

			productMayContain.append(
				productMayContainTitle, 
				productMayContainAllergens
			);
		}

	}

	renderHTML();
}