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
			const textContainer = document.createElement('div');
			const informationTitle = document.createElement('h3');
			const informationParagraph = document.createElement('p');
			const imageContainer = document.createElement('div');
			const informationImage = document.createElement('img');

			textContainer.classList.add('information__container')
			informationTitle.classList.add('information__container-title');
			informationParagraph.classList.add('information__container-paragraph');
			imageContainer.classList.add('information__container')
			informationImage.classList.add('information__container-image');

			informationTitle.innerText = information.title;
			informationParagraph.innerText = information.paragraph;
			informationImage.setAttribute('src', information.image);

			grid.append(
				imageContainer,
				textContainer
			);

			textContainer.append(
				informationTitle,
				informationParagraph,
			);

			imageContainer.append(informationImage);

		}

	}
}