const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				'xs': { 'max': '359px' },  // smaller screens
				's10': { 'min': '360px', 'max': '411px' },  // for 360*760
				's20': { 'min': '412px', 'max': '809px' }  // for 412*915 and up
			},
			fontSize: {
				'between1': '0.9425rem', // fontsize between 'text-sm' and 'text-base'
				'between2': '1.0325rem', // fontsize between 'text-sm' and 'text-base'
				'between3': '1.0525rem', // fontsize between 'text-base' and 'text-lg'
			},
			colors: {
				// Light colors
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				// Dark colors
				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',

				// Extended v3 color
				gray: colors.neutral,
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
