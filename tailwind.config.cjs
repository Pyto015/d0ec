/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{tsx,jsx,js,ts}', './index.html'],
	theme: {
		extend: {
			fontFamily: {
				hack: ['Hack', 'monospace'],
			},
		},
	},
	plugins: [],
}
