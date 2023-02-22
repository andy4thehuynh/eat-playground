/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
	theme: {
		extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'syncopate': ['Syncopate', 'sans-serif'],
      }
    },
	},
  plugins: [require('tw-elements/dist/plugin')],
}
