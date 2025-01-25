/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				darkViolet: 'hsl(256, 26%, 20%)',
				grayishBlue: 'hsl(216, 30%, 68%)',
				veryDarkViolet: 'hsl(270, 9%, 17%)',
				darkGrayishViolet: 'hsl(273, 4%, 51%)',
				veryLightGray: 'hsl(0, 0%, 98%)',
			},
			fontFamily: {
				sans: ['Karla', 'sans'],
				display: 'DM Serif Display',
			},
			fontWeight: {
				display400: '400',
				karla400: '400',
				karla700: '700',
			},
			fontSize: {
				base: ['1.6rem'],
			},
			backgroundImage: {
				navMenu: "url('./src/images/bg-pattern-mobile-nav.svg')"
			},
			container: {
				center: true,
			},
		},

		fontWeight: {},
	},
	plugins: [],
}
