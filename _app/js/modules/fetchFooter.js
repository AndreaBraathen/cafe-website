import { sanity } from "../sanity.js";

// This function fetches all the data from Sanity database that matches the document type "settings" using a query to get all the chosen fields in the "footer" object
export default async function fetchFooter() {
	const query = `*[_type == 'settings'] {
		footer {
		  contactInfo,
		  'logo': logo.asset -> url,
		  links[] {
			 linkText,
			 url,
			 isHypertext,
		  },
		  address
		}
	 }`;

	// Imports the html-class into javascript
	const grid = document.querySelector('.footer__main');

	// sanity.fetch executes the query and retrieve the product data
	const footerElements = await sanity.fetch(query);

	if (grid) {
		renderHTML();	
	}

	// This function iterates over the retrived "footerElements", and creates different DOM-elements to render the information on the website, for each footerElement.
	function renderHTML() {
		for (const footerElement of footerElements) {

			// Simplifies the path to make it easier to fetch the different elements within the footer-object.
			const footerData = footerElement.footer;

			// Creates DOM-elements
			const footerLogo = document.createElement('img');
			const footerAddress = document.createElement('div');
			const footerContact = document.createElement('div');
			const footerContactHeadline = document.createElement('div');

			// Creates a DOM-list-element for contact information
			const footerContactList = document.createElement('ul');
			for (const contact of footerData.contactInfo) {
				const contactForms = document.createElement('li');
				contactForms.innerText = contact;
				footerContactList.appendChild(contactForms);
			}

			// Creates a DOM-list-element that displays as a hypertext link if it is set to true in Sanity
			const footerLinks = document.createElement('ul');
			for (const link of footerData.links) {
				const listItem = document.createElement('li');

				// If the link is set to hypertext it will display as hypertext, if not it will just display the link
				if (link.isHypertext) {
					const linkElement = document.createElement('a');
					linkElement.textContent = link.linkText;
					linkElement.classList.add('footer__links-link');
					linkElement.setAttribute('href', link.url);
					listItem.appendChild(linkElement);
				} else {
					listItem.innerText = link.linkText;
				}
				footerLinks.appendChild(listItem);
			};

			// Gives each DOM-element a class-name
			footerLogo.classList.add('footer__main-logo');
			footerAddress.classList.add('footer__main-address');
			footerContact.classList.add('footer__main-contact-info');
			footerContactHeadline.classList.add('footer__main-contact-info-headline')
			footerContactList.classList.add('footer__main-contact-info-links');
			footerLinks.classList.add('footer__main-links');
			
			// Gives the DOM-element the fetched data from Sanity
			footerLogo.setAttribute('src', footerData.logo);
			footerAddress.innerText = footerData.address;
			footerContactHeadline.innerText = 'Contact Us';

			// Places the different elements in the DOM to render a footer section 
			grid.append(
				footerLogo,
				footerLinks,
				footerContact,
				footerAddress,
			);

			footerContact.append(
				footerContactHeadline,
				footerContactList
			);
		}
	}
}