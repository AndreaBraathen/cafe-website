export default {
	title: 'Information',
	name: 'information',
	type: 'document',
	fields: [
		{
			title: 'Headline',
			name: 'headline',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'headline'
			}
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
		},
		{
			title: 'Paragraph',
			name: 'paragraph',
			type: 'text',
		}
	]
}