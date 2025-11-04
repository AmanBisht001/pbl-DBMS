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
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
				serif: ['Georgia', 'serif'], // Added for certificate elegance
			},
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
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
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
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-certificate': 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f0f4ff 100%)', // Added for certificate
				'gradient-gold': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', // Added for seal
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'card': 'var(--shadow-card)',
				'glow': 'var(--shadow-glow)',
				'accent-glow': 'var(--shadow-accent-glow)',
				'certificate': '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 30px rgba(59, 130, 246, 0.2)', // Added for certificate
				'seal': '0 10px 25px -3px rgba(245, 158, 11, 0.4), 0 4px 6px -2px rgba(245, 158, 11, 0.1)', // Added for seal
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
				'certificate': 'cubic-bezier(0.4, 0, 0.2, 1)', // Added for certificate animations
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'certificate': '1rem', // Added for certificate
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
				// Certificate-specific animations
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0) translateX(0)' 
					},
					'50%': { 
						transform: 'translateY(-10px) translateX(5px)' 
					}
				},
				'float-delayed': {
					'0%, 100%': { 
						transform: 'translateY(0) translateX(0)' 
					},
					'50%': { 
						transform: 'translateY(-8px) translateX(-3px)' 
					}
				},
				'float-slow': {
					'0%, 100%': { 
						transform: 'translateY(0) translateX(0)' 
					},
					'50%': { 
						transform: 'translateY(-12px) translateX(2px)' 
					}
				},
				'spin-slow': {
					'0%': { 
						transform: 'rotate(0deg)' 
					},
					'100%': { 
						transform: 'rotate(360deg)' 
					}
				},
				'pulse-gentle': {
					'0%, 100%': { 
						opacity: '0.6' 
					},
					'50%': { 
						opacity: '0.8' 
					}
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Certificate animations
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float-delayed 7s ease-in-out 1s infinite',
				'float-slow': 'float-slow 8s ease-in-out 2s infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'pulse-gentle': 'pulse-gentle 4s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
			},
			// Additional spacing for certificate
			spacing: {
				'certificate': '3rem',
				'seal': '6rem',
			},
			// Backdrop blur utilities
			backdropBlur: {
				xs: '2px',
			},
			// Additional opacity levels
			opacity: {
				'15': '0.15',
				'35': '0.35',
				'65': '0.65',
				'85': '0.85',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;