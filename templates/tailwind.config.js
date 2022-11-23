/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#cb373b",
					50: "#fdf3f3",
					100: "#fbe5e6",
					200: "#f9cfd0",
					300: "#f4adaf",
					400: "#eb7e81",
					500: "#df5458",
					600: "#cb373b",
					700: "#aa2b2f",
					800: "#8d272a",
					900: "#762628",
				},
			},
		},
	},
	plugins: [],
};
