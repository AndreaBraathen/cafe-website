import { sanity } from "../sanity.js";

// This function fetches all the data from Sanity database that matches the document type "settings" using a query to get all the chosen fields in the "location" object
export default async function fetchLocations() {
	const query = `*[_type == 'settings'] {
		location[] {
		  streetName,
		  streetAddress,
		  phoneNumber,
		  emailAddress,
		  mapLocation,
		  'image': image.asset -> url 
		}
	 }`;

	// Imports the html-class into javascript 
	const grid = document.querySelector('.location');

	// sanity.fetch executes the query and retrieve the product data
	const locations = await sanity.fetch(query);

	if (grid) {
		renderHTML();
	}

	// This function iterates over the retrived "locationContent", and creates different DOM-elements to render the information on the website, for each location.
	function renderHTML() {

		// Simplifies the path to make it easier to fetch the different elements within the location-element.
		const locationContent = locations[0].location;

		// Creates DOM-elements
		for (const location of locationContent) {
			const locationContainer = document.createElement('div');
			const locationTitle = document.createElement('div');
			const locationName = document.createElement('h2');
			const locationStreet = document.createElement('h3');
			const locationInformation = document.createElement('div');
			const locationContact = document.createElement('div');
			const locationAddress = document.createElement('div');
			const locationNumber = document.createElement('div');
			const locationEmail = document.createElement('div');
			const locationImage = document.createElement('img');

			// Gives each DOM-element a class-name
			locationContainer.classList.add('location__container');
			locationTitle.classList.add('location__container-information-headline')
			locationName.classList.add('location__container-information-headline-name')
			locationStreet.classList.add('location__container-information-headline-street');
			locationInformation.classList.add('location__container-information');
			locationContact.classList.add('location__container-information-contact')
			locationAddress.classList.add('location__container-information-contact-address');
			locationNumber.classList.add('location__container-information-contact-number');
			locationEmail.classList.add('location__container-information-contact-email');
			locationImage.classList.add('location__container-image');

			// Gives the DOM-element the fetched data from Sanity
			locationName.innerText = 'Happy Clouds Coffee House';
			locationStreet.innerText = location.streetName;
			locationAddress.innerText = location.streetAddress;
			locationNumber.innerText = location.phoneNumber;
			locationEmail.innerText = location.emailAddress;
			locationImage.setAttribute('src', location.image);

			// Places the different elements in the DOM to render a location page
			grid.append(
				locationContainer
			);

			locationContainer.append(
				locationImage,
				locationInformation,
			);

			locationTitle.append(
				locationName,
				locationStreet
			);

			locationInformation.append(
				locationTitle,
				locationContact,
			);

			locationContact.append(
				locationNumber,
				locationEmail,
				locationAddress
			)
		}
	}
}