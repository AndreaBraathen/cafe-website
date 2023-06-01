import { sanity } from "../sanity.js";

	// This function fetches all the data from Sanity database that matches the document type "food", "hotDrink" or "coldDrink", using a query to get all the chosen fields in the different documents
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
			'image': image.asset->url,
			alternativeText
		 }`;
	
		// sanity.fetch executes the query and retrieve the product data
		const products = await sanity.fetch(query);

		// When the data is returned, the data becomes accessible across different js-files and functions
		return products;

}