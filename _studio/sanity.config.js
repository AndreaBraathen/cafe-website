import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import settings from './structure/settings.js';
import cafe from './structure/cafe.js'

export default {
	title: 'Happy Clouds Coffee House',

	projectId: 'fdn8naix',
	dataset: 'production',

	plugins: [
		deskTool({
			title: 'Café',
			name: 'cafe',
			structure: cafe
		}),

		deskTool({
			title: 'Settings',
			name: 'settings',
			structure: settings
		}),

		visionTool()],

	schema: {
		types: schemas,
	},
};
