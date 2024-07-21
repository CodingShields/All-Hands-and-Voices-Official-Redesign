/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				"scale-0": {
					"0%": {
						transform: "scale(0) ",
					},
					"100%": {
						transform: "scale(1) ",
					},
				},
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			animation: {
				scale: "scale 5s ease-in-out loop",
				fadeIn: "fadeIn 1s ease-in forwards",
			},
			fontFamily: {
				kaushan: ["Kaushan Script"],
			},
			colors: {
				hvblue: {
					DEFAULT: "#141B4B",
					50: "#4859CE",
					100: "#384BCA",
					200: "#2E3EAC",
					300: "#25328B",
					400: "#1D276B",
					500: "#141B4B",
					600: "#080B1F",
				},
				hvorange: {
					DEFAULT: "#FF7F32",
					50: "#FFF2EA",
					100: "#FFE5D5",
					200: "#FFCBAC",
					300: "#FFB284",
					400: "#FF985B",
					500: "#FF7F32",
					600: "#F95D00",
					700: "#C14800",
					800: "#893300",
					900: "#511E00",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), "prettier-plugin-tailwindcss"],
};
