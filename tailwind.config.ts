
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// WanderLens custom colors
				earth: {
					100: '#F7F3EE',
					200: '#E5DFDA',
					300: '#D4CAC0',
					400: '#C2B5A7',
					500: '#A89985',
					600: '#8A7C69',
					700: '#6C604E',
					800: '#4E4438',
					900: '#302922',
				},
				sage: {
					100: '#F1F4F0',
					200: '#DFE5DD',
					300: '#CCD6CA',
					400: '#B9C7B6',
					500: '#A6B8A3',
					600: '#869985',
					700: '#677A64',
					800: '#485C47',
					900: '#2A3D2A',
				},
				terracotta: {
					100: '#FCF0EB',
					200: '#F8DFD3',
					300: '#F4CEBC',
					400: '#EFBDA4',
					500: '#E99D76',
					600: '#E37D48',
					700: '#D15F27',
					800: '#A34A1F',
					900: '#753517',
				},
				ocean: {
					100: '#E6F4F6',
					200: '#C4E5EA',
					300: '#A2D5DE',
					400: '#80C6D1',
					500: '#4DADBC',
					600: '#3990A0',
					700: '#297384',
					800: '#1A5768',
					900: '#0A3A4C',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					from: { opacity: '1', transform: 'translateY(0)' },
					to: { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in-right': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0)' }
				},
				'slide-in-left': {
					from: { transform: 'translateX(-100%)' },
					to: { transform: 'translateX(0)' }
				},
				'slide-in-bottom': {
					from: { transform: 'translateY(100%)' },
					to: { transform: 'translateY(0)' }
				},
				'slide-in-top': {
					from: { transform: 'translateY(-100%)' },
					to: { transform: 'translateY(0)' }
				},
				'scale-in': {
					from: { transform: 'scale(0.95)', opacity: '0' },
					to: { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'rotate-globe': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.5s ease-out',
				'slide-in-top': 'slide-in-top 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'scale-out': 'scale-out 0.3s ease-out',
				'rotate-globe': 'rotate-globe 60s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite'
			},
			fontFamily: {
				sans: [
					'SF Pro Display', 
					'-apple-system', 
					'BlinkMacSystemFont', 
					'Segoe UI', 
					'Roboto', 
					'Helvetica Neue', 
					'Arial', 
					'sans-serif'
				],
				display: [
					'SF Pro Display', 
					'-apple-system', 
					'BlinkMacSystemFont', 
					'Segoe UI', 
					'Roboto', 
					'Helvetica Neue', 
					'Arial', 
					'sans-serif'
				],
			},
			boxShadow: {
				'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
				'glass-strong': '0 8px 32px rgba(0, 0, 0, 0.15)',
				'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.2)',
				'soft-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
				'soft-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
				'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
				'glass-shine': 'linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)',
				'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
			},
			backdropBlur: {
				xs: '2px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
