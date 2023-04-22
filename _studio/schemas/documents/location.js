export default {
	title: 'Location',
	name: 'location',
	type: 'document',
	fields: [
		{
			title: 'Cafe Name',
			name: 'cafeName',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'cafeName',
			}
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Phone Number',
			name: 'phoneNumber',
			type: 'string',
			description: 'Start with the country calling code',
		},
		{
			title: 'Email address',
			name: 'emailAddress',
			type: 'string',
		},
		{
			title: 'Street address',
			name: 'streetAddress',
			type: 'string',
		}
	]
}