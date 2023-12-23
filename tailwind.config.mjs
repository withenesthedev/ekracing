import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Helvetica Neue', 'Helvetica', 'Arial', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
