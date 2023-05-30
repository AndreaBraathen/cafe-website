import { sanity } from "../sanity.js";

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

	const grid = document.querySelector('.footer');
	const footerElements = await sanity.fetch(query);

	if (grid) {
		renderHTML();	
	}

	function renderHTML() {
		for (const footerElement of footerElements) {
			const footerData = footerElement.footer;

			const footerLogo = document.createElement('img');
			const footerAddress = document.createElement('div');
			const footerContact = document.createElement('div');
			const footerContactHeadline = document.createElement('div');
			const footerContactList = document.createElement('ul');
			for (const contact of footerData.contactInfo) {
				const contactForms = document.createElement('li');
				contactForms.innerText = contact;
				footerContactList.appendChild(contactForms);
			}

			const footerLinks = document.createElement('ul');
			for (const link of footerData.links) {
				const listItem = document.createElement('li');

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
				
			}


			footerLogo.classList.add('footer__logo');
			footerAddress.classList.add('footer__address');
			footerContact.classList.add('footer__contact-info');
			footerContactHeadline.classList.add('footer__contact-info-headline')
			footerContactList.classList.add('footer__contact-info-links');
			footerLinks.classList.add('footer__links');
			

			footerLogo.setAttribute('src', footerData.logo);
			footerAddress.innerText = footerData.address;
			footerContactHeadline.innerText = 'Contact Us';

			grid.append(
				footerLogo,
				footerLinks,
				footerContact,
				footerAddress,
			)

			footerContact.append(
				footerContactHeadline,
				footerContactList
			)
		}
	}
}