export default {
	title: 'Settings',
	name: 'settings',
	type: 'document',
	fields: [
		{
			title: 'Announcement',
			name: 'announcement',
			type: 'object',
			options: {
				collapsible: true, 
			},
			fields: [
				{
					title: 'Text',
					name: 'text',
					type: 'string'
				},
				{
					title: 'Visible',
					name: 'visible',
					type: 'boolean'
				}
			]
		},
		{
			title: 'Slideshow',
			name: 'slideshow',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							title: 'Slideshow Title',
							name: 'slideshowTitle',
							type: 'string',
						},
						{
							title: 'Slideshow Slide',
							name: 'slideshowSlide',
							type: 'image',
						},
						{
							title: 'Slideshow Paragraph',
							name: 'slideshowParagraph',
							type: 'text',
						},
						{
							title: 'Slideshow Button',
							name: 'slideshowButton',
							type: 'string',
						}

					]
				},
			]	
		},
		{
			title: 'Information',
			name: 'information',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							title: 'Title',
							name: 'title',
							type: 'string',
						},
						{
							title: 'Paragraph',
							name: 'paragraph',
							type: 'string',
							type: 'text'
						},
						{
							title: 'Image',
							name: 'image',
							type: 'image'
						}
					]
				},
			]
		},
		{
			title: 'Location',
			name: 'location',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							title: 'Street Name',
							name: 'streetName',
							type: 'string',
						},
						{
							title: 'Phone Number',
							name: 'phoneNumber',
							type: 'string',
						},
						{
							title: 'Email Address',
							name: 'emailAddress',
							type: 'string',
						},
						{
							title: 'Street Address',
							name: 'streetAddress',
							type: 'string',
						},
						{
							title: 'Image',
							name: 'image',
							type: 'image',
						},
						{
							title: 'Map location',
							name: 'mapLocation',
							type: 'geopoint',
						}
					]
				},
			]
		},
		{
			title: 'Footer',
			name: 'footer',
			type: 'object',
			options: {
				collapsible: true,
				collapsed: true,
			},
			fields: [
				{
					title: 'Logo',
					name: 'logo',
					type: 'image',
				},
				{
					title: 'Links',
					name: 'links',
					type: 'array',
					of: [
						{
							type: 'object',
							fields: [
								{
									title: 'Link text',
									name: 'linkText',
									type: 'string',
								},
								{
									title: 'Url',
									name: 'url',
									type: 'url',
								},
								{
									title: 'Is hypertext',
									name: 'isHypertext',
									type: 'boolean',
									description: 'Check this is the link should be a hypertext link',
								}
							]
						}
					]
				},
				{
					title: 'Contact Info',
					name: 'contactInfo',
					type: 'array',
					of: [
						{
							type: 'string'
						}
					]
				},
				{
					title: 'Address',
					name: 'address',
					type: 'string',
				},
			]
		}
	],
	preview: {
		prepare: () => {
			return {
				title: 'Settings'
			}
		}
	}
}