import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://im4x.dev',
	integrations: [
		starlight({
			title: 'AL Guides',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/im4xxx/im4x.dev',
				twitter: 'https://t.me/anilibriaTech',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Вступление', link: '/guides/introduction/' },
					],
				},
			],
		}),
	],
});
