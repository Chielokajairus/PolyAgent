/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace']
			},
			colors: {
				primary: {
					50: '#eff6ff',
					500: '#2563eb',
					600: '#1d4ed8',
					700: '#1e40af'
				},
				gray: {
					50: '#f8fafc',
					900: '#0f172a'
				}
			},
			animation: {
				'float': 'float 8s ease-in-out infinite',
				'spin-slow': 'spin 60s linear infinite',
				'pulse-slow': 'pulse 4s ease-in-out infinite'
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-12px) rotate(2deg)' },
					'66%': { transform: 'translateY(-8px) rotate(-1deg)' }
				}
			}
		}
	},
	plugins: []
};
