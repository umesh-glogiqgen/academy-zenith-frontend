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
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				professional: {
					primary: 'hsl(var(--professional-primary))',     // #237d8c - Deep Teal
					secondary: 'hsl(var(--professional-secondary))', // #349198 - Medium Teal  
					accent: 'hsl(var(--professional-accent))',       // #46a6a5 - Teal Accent
					success: 'hsl(var(--professional-success))',     // #C8E6D0 - Soft Mint
					warning: 'hsl(var(--professional-warning))'      // #d9eca1 - Light Mint
				},
				// Custom Teal/Mint Color Palette
				teal: {
					50: '#f0f8f7',   // Very light teal
					100: '#d1f0ed',  // Light teal
					200: '#a3e0da',  // Soft teal
					300: '#58bbb2',  // Medium mint teal (#58bbb2)
					400: '#46a6a5',  // Teal accent (#46a6a5)
					500: '#349198',  // Medium teal (#349198)
					600: '#237d8c',  // Deep teal (#237d8c) - Primary
					700: '#1e6b76',  // Darker teal
					800: '#1a5960',  // Very dark teal
					900: '#164749'   // Deepest teal
				},
				mint: {
					50: '#f8fbfa',   // Lightest mint
					100: '#f0f8f5',  // Very light mint
					200: '#e8f5f0',  // Light mint
					300: '#d9eca1',  // Light mint green (#d9eca1)
					400: '#c8e6d0',  // Soft mint green (#C8E6D0)
					500: '#a8d8b9',  // Medium mint
					600: '#88ca9a',  // Deeper mint
					700: '#68bc7b',  // Dark mint
					800: '#5a9d68',  // Darker mint
					900: '#4c7e55'   // Darkest mint
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'hero-teal': 'linear-gradient(135deg, #d9eca1, #C8E6D0, #58bbb2, #349198)',
				'card-mint': 'linear-gradient(145deg, #f8fbfa, #f0f8f5, #e8f5f0)',
				'feature-teal': 'linear-gradient(120deg, rgba(88, 187, 178, 0.1), rgba(200, 230, 208, 0.15))',
				'gradient-teal': 'linear-gradient(135deg, #237d8c, #349198, #46a6a5)',
				'gradient-mint': 'linear-gradient(135deg, #C8E6D0, #d9eca1)',
				'hero-soft': 'linear-gradient(135deg, #f0f8f5, #e8f5f0, #d9eca1)'
			},
			boxShadow: {
				'teal': '0 10px 30px -10px rgba(35, 125, 140, 0.3)',
				'mint': '0 8px 25px -8px rgba(52, 145, 152, 0.15)',
				'glow-teal': '0 0 40px rgba(88, 187, 178, 0.4)',
				'soft': '0 4px 20px -4px rgba(200, 230, 208, 0.25)',
				'card-hover': '0 20px 40px -12px rgba(35, 125, 140, 0.25)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gentle-bounce': {
					'0%, 100%': {
						transform: 'translateY(0px)',
					},
					'50%': {
						transform: 'translateY(-4px)',
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;