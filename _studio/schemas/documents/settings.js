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
			type: 'object',
			options: {
				collapsible: true,
				collapsed: true, 
			},
			fields: [
				{
					title: 'Slideshow Title',
					name: 'slideshowTitle',
					type: 'string',
				},
				{
					title: 'Slideshow elements',
					name: 'slideshowElements',
					type: 'object',
					fields: [
						{
							title: 'Slideshow Slide',
							name: 'slideshowSlide',
							type: 'array',
							of: [
								{
									type: 'image'
								}
							]
						},
						{
							title: 'Slideshow Paragraph',
							name: 'text',
							type: 'array',
							of: [
								{
									type: 'text'
								}
							]
						},
						{
							title: 'Slideshow Button',
							name: 'slideshowButton',
							type: 'array',
							of: [
								{
									type: 'string'
								}
							]
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
			title: 'Locations',
			name: 'locations',
			type: 'object',
			options: {
				collapsible: true,
				collapsed: true,
			},
			fields: [
				{
					title: 'Street Name',
					name: 'streetName',
					type: 'array',
					of: [
						{
							type: 'string'
						}
					]
				},
				{
					title: 'Phone Number',
					name: 'phoneNumber',
					type: 'array',
					of: [
						{
							type: 'string'
						}
					]
				},
				{
					title: 'Email Address',
					name: 'emailAddress',
					type: 'array',
					of: [
						{
							type: 'string'
						}
					]
				},
				{
					title: 'Street Address',
					name: 'streetAddress',
					type: 'array',
					of: [
						{
							type: 'string'
						}
					]
				},
				{
					title: 'Image',
					name: 'image',
					type: 'array',
					of: [
						{
							type: 'image'
						}
					]
				},
				{
					title: 'Map location',
					name: 'mapLocation',
					type: 'array',
					of: [
						{
							type: 'geopoint'
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
							type: 'url'
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