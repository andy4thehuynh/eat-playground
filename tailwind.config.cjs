/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
	theme: {
		extend: {},
	},
  plugins: [require('tw-elements/dist/plugin')],
}
