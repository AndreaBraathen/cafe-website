import { sanity } from "../sanity.js";

// This function fetches all the data from Sanity database that matches the document type "settings" using a query to get all the chosen fields in the "information" object
export default async function fetchInformation() {
	const query = `*[_type == 'settings'] {
		information[] {
		  title,
		  paragraph,
		  'image': image.asset -> url
		}
	 }`;

	// Imports the html-class into javascript 
	const grid = document.querySelector('.information');

	// sanity.fetch executes the query and retrieve the product data
	const informations = await sanity.fetch(query);
	
	if (grid) {
		renderHTML();
	}
	
	// This function iterates over the retrived "informationContent", and creates different DOM-elements to render the information on the website, for each information.
	function renderHTML() {

		// Simplifies the path to make it easier to fetch the different elements within the information-element.
		const informationContent = informations[0].information;

		// Creates DOM-elements
		for (const information of informationContent) {
			const gridContainer = document.createElement('div');
			const textContainer = document.createElement('div');
			const informationTitle = document.createElement('h3');
			const informationParagraph = document.createElement('p');
			const informationImage = document.createElement('img');

			// Gives each DOM-element a class-name
			gridContainer.classList.add('information__container');
			textContainer.classList.add('information__container-text');
			informationTitle.classList.add('information__container-text-title');
			informationParagraph.classList.add('information__container-text-paragraph');
			informationImage.classList.add('information__container-image');

			// Gives the DOM-element the fetched data from Sanity
			informationTitle.innerText = information.title;
			informationParagraph.innerText = information.paragraph;
			informationImage.setAttribute('src', information.image);

			// Places the different elements in the DOM to render a footer section 
			grid.append(
				gridContainer	
			);

			gridContainer.append(
				informationImage,
				textContainer
			);

			textContainer.append(
				informationTitle,
				informationParagraph,
			);

		}

	}
}