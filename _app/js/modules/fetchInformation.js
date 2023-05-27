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
			const gridContainer = document.createElement('div');
			const textContainer = document.createElement('div');
			const informationTitle = document.createElement('h3');
			const informationParagraph = document.createElement('p');
			const informationImage = document.createElement('img');

			gridContainer.classList.add('information__container');
			textContainer.classList.add('information__container-text');
			informationTitle.classList.add('information__container-text-title');
			informationParagraph.classList.add('information__container-text-paragraph');
			informationImage.classList.add('information__container-image');

			informationTitle.innerText = information.title;
			informationParagraph.innerText = information.paragraph;
			informationImage.setAttribute('src', information.image);

			grid.append(
				gridContainer	
			);

			gridContainer.append(
				informationImage,
				textContainer
			)

			textContainer.append(
				informationTitle,
				informationParagraph,
			);

		}

	}
}