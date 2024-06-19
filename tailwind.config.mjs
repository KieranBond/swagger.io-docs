import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [starlightPlugin()],
	theme: {
		colors: {
			'primary': '#097eb2',
			'primary-dark': '#00537c',
			'swagger': '#85EA2D',
			'swagger-dark': '#5bd621',
			'white': '#ffffff',
			'black': '#000000',
		},
		extend: {},
	},
	corePlugins: {
		preflight: false,
	}
}