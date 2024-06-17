/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				body: "url('/src/assets/bg-bayer.webp')",
				"headline-day": "url('/src/assets/cintillo-dia.webp')",
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#fff',
				black: '#000',
				aqua: '#20BCFB',
				sky: '#698CBA',
				blue: '#095281',
				green: '#1B645C',
				evblue: '#12384e',
				gray: {
					DEFAULT: '#f3f4f6',
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#9ca3af',
					500: '#6b7280',
					600: '#4b5563',
					700: '#374151',
					800: '#1f2937',
					900: '#111827'
				},
			},
			fontFamily: {
				body: ['Montserrat Variable', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
