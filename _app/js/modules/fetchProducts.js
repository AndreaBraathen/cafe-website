import { sanity } from "../sanity.js";

	export default async function fetchProducts() {
		const query = `*[_type in ["food", "hotDrink", "coldDrink"]] {
			name,
			description,
			ingredients,
			'mayContainTracesOf': mayContainTracesOf[]->typeOfAllergen,
			'category': category[]->typeOfFood,
			'allergens': allergens[]->typeOfAllergen,
			price,
			_id,
			'image': image.asset->url
		 }`;
	
		const products = await sanity.fetch(query);
		// console.log("fetchedProducts:", products)
		return products;

}