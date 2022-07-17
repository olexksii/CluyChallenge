/* eslint-disable */
const colors = require('tailwindcss/colors');

const clueyColors = {
	'blood-orange': {
		1: '#FAF4EB',
		2: '#FCE4C7',
		3: '#FFCA99',
		4: '#FF6600',
		5: '#BF4B00',
		6: '#92400D',
	},
	blue: {
		1: '#ECFAFA',
		2: '#7FCFFF',
		3: '#2BB9FF',
		4: '#008DE8',
		5: '#004BB9',
		6: '#1D1693',
	},
	slate: {
		1: '#F2F5FA',
		2: '#E3E7FA',
		3: '#CED2ED',
		4: '#4F5373',
		5: '#2B2E45',
		6: '#16192E',
	},
	grey: {
		1: '#F2F4F5',
		2: '#E6E8E8',
		3: '#D2D5D6',
		4: '#929596',
		5: '#535759',
		6: '#383C40',
	},
	yellow: {
		1: '#FFEFBB',
		2: '#FFDB67',
		3: '#FFC300',
		4: '#F6A11D',
		5: '#A26404',
		6: '#4C3003',
	},
	purple: {
		1: '#F4F2FF',
		2: '#b0a1ff',
		3: '#9573ff',
		4: '#612094',
		5: '#612094',
		6: '#420055',
	},
	red: {
		1: '#FFF2ED',
		2: '#FFE1D9',
		3: '#FFC7BA',
		4: '#FF5C4A',
		5: '#D93829',
		6: '#A12C23',
	},
	green: {
		1: '#E8FAE9',
		2: '#BCF7B4',
		3: '#7FEB86',
		4: '#1B8728',
		5: '#196323',
		6: '#17451E',
	},
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
		'./node_modules/@cluey/cluey-components/dist/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'class',
	safelist: [
		{
			pattern: /col-span-.+/,
			variants: ['md'],
		},
		{
			pattern: /grid-cols-.+/,
		},
	],
	theme: {
		extend: {
			fontSize: {
				'2xs': '11px',
				'2base': '15px',
			},
		},
		fontFamily: {
			display: '"proxima-nova",sans-serif',
			body: '"proxima-soft",sans-serif',
		},
		colors: {
			// helper colors
			transparent: 'transparent',
			black: colors.black,
			white: colors.white,
			// button colors
			primary: clueyColors.blue[5],
			secondary: '#ff5000',
			// branding colours
			action: clueyColors.blue[5],
			brand: clueyColors['blood-orange'][4],
			neutral: clueyColors.slate[4],
			tertiary: clueyColors.purple[5],
			error: clueyColors.red[5],
			success: clueyColors.green[5],
			// everything
			...clueyColors,
		},
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				'.container': {
					width: '100%',
					'@screen sm': {
						maxWidth: '640px',
					},
					'@screen md': {
						maxWidth: '768px',
					},
					'@screen lg': {
						maxWidth: '860px',
					},
					'@screen xl': {
						maxWidth: '960px',
					},
				},
			});
		},
	],
};
