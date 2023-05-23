import { sanity } from "../sanity.js";

export default async function fetchInformation() {
	const query = `*[_type == 'settings'] {
		information[] {
		  title,
		  paragraph,
		  'image': image.asset -> url
		}
	 }`;

	const grid = document.querySelector('.information');
	const informations = await sanity.fetch(query);
	
	
	if (grid) {
		renderHTML();
	}
	

	function renderHTML() {
		const informationContent = informations[0].information;

		for (const information of informationContent) {
			const informationTitle = document.createElement('h3');
			const informationParagraph = document.createElement('p');
			const informationImage = document.createElement('image');

			informationTitle.classList.add('information__title');
			informationParagraph.classList.add('information__paragraph');
			informationImage.classList.add('information__image');

			informationTitle.innerText = information.title;
			informationParagraph.innerText = information.paragraph;
			informationImage.setAttribute('src', information.image);

			grid.appendChild(informationTitle);

		}




	}
}