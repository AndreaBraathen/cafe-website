import { sanity } from "../sanity.js";

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

	const grid = document.querySelector('.location')
	const locations = await sanity.fetch(query);

	if (grid) {
		renderHTML();
	}

	function renderHTML() {
		const locationContent = locations[0].location;

		for (const location of locationContent) {
			const locationContainer = document.createElement('div');
			const locationTitle = document.createElement('div');
			const locationName = document.createElement('h2');
			const locationStreet = document.createElement('h3');
			const locationInformation = document.createElement('div');
			const locationAddress = document.createElement('div');
			const locationNumber = document.createElement('div');
			const locationEmail = document.createElement('div');
			// const locationMap = document.createElement('div');
			const locationImage = document.createElement('img');

			locationContainer.classList.add('location__container');
			locationTitle.classList.add('location__container-information-headline')
			locationName.classList.add('location__container-information-headline-name')
			locationStreet.classList.add('location__container-information-headline-street');
			locationInformation.classList.add('location__container-information');
			locationAddress.classList.add('location__container-information-address');
			locationNumber.classList.add('location__container-information-number');
			locationEmail.classList.add('location__container-information-email');
			// locationMap.classList.add('location__container-number');
			locationImage.classList.add('location__container-image');

			locationName.innerText = 'Happy Clouds Coffee House';
			locationStreet.innerText = location.streetName;
			locationAddress.innerText = location.streetAddress;
			locationNumber.innerText = location.phoneNumber;
			locationEmail.innerText = location.emailAddress;
			// locationMap.innerText = location.mapLocation;
			locationImage.setAttribute('src', location.image);

			grid.append(
				locationContainer
			);

			locationContainer.append(
				locationImage,
				locationInformation,
				// locationMap
			);

			locationTitle.append(
				locationName,
				locationStreet
			);

			locationInformation.append(
				locationTitle,
				locationAddress,
				locationNumber,
				locationEmail,
			)
		}
	}
}