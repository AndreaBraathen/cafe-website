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
	document.body.appendChild(menu);

	function renderHTML() {
		for (const product of products) {
			const productItem = document.createElement('div');
			const productImage = document.createElement('img');
			const productName = document.createElement('div');

			const productTitle = document.createElement('div');
			const productCard = document.createElement('div');
			const productPrice = document.createElement('div');

			const productDescriptionSection = document.createElement('div');
			const productDescriptionTitle = document.createElement('h3');
			const productDescription = document.createElement('p');

			const productAllergensSection = document.createElement('div');
			const productAllergensTitle = document.createElement('h3');
			const productAllergens = document.createElement('div');

			const productMayContainSection = document.createElement('div');
			const productMayContainTitle = document.createElement('h3');
			const productMayContainAllergens = document.createElement('div');

			productItem.classList.add('product__item');
			productImage.classList.add('product__item-image');
			productName.classList.add('product__item-name');

			productCard.classList.add('product__card');
			productTitle.classList.add('product__card-title');
			productPrice.classList.add('product__card-price');

			productDescriptionSection.classList.add('product__card-description-section')
			productDescriptionTitle.classList.add('product__card-description-section-title');
			productDescription.classList.add('product__card-description-section-info');

			productAllergensSection.classList.add('product__card-allergens-section');
			productAllergensTitle.classList.add('product__card-allergens-section-title');
			productAllergens.classList.add('product__card-allergens-section-info');

			productMayContainSection.classList.add('product__card-may-contain-section');
			productMayContainTitle.classList.add('product__card-may-contain-section-title');
			productMayContainAllergens.classList.add('product__card-may-contain-section-info');

			productImage.setAttribute('src', product.image);
			productName.innerText = product.name;
			productTitle.innerText = product.name;
			productPrice.innerText = `$ ${product.price}0`;
			productDescriptionTitle.innerText = 'Description:';
			productDescription.innerText = product.description;
			productAllergensTitle.innerText = 'Allergens:';
			productAllergens.innerText = product.allergens;
			productMayContainTitle.innerText = 'May contain traces of:'
			productMayContainAllergens.innerText = product.mayContainTracesOf;

			menu.append(productItem);
			productItem.append(productImage, productName, productCard);
			productCard.append(productTitle, productPrice, productDescriptionSection, productAllergensSection, productMayContainSection);
			productDescriptionSection.append(productDescriptionTitle, productDescription);
			productAllergensSection.append(productAllergensTitle, productAllergens);
			productMayContainSection.append(productMayContainTitle, productMayContainAllergens);
		}

	}

	renderHTML();
}