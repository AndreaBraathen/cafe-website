import { sanity } from "../sanity.js";

export default async function products() {
	const query = `*[_type in ["food", "hotDrink", "coldDrink"]] {
		name,
		description,
		mayContainTracesOf[] -> {
		  typeOfAllergen
		},
		category -> {
		  typeOfFood
		},
		allergens[] -> {
		  typeOfAllergen
		},
		price,
		image {
		  asset -> {
			 url
		  }
		}   
	}`;

	const sanityData = await sanity.fetch(query);

	console.log(sanityData);
}