import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		fontFamily: {
    			sans: ['var(--font-sans)', 'sans-serif'],
    			display: ['var(--font-display)', 'sans-serif'],
    		},
    		fontSize: {
    			xs: ['0.8125rem', { lineHeight: '1.125rem' }], // 13px (was 12px)
    			sm: ['0.9375rem', { lineHeight: '1.375rem' }], // 15px (was 14px)
    			base: ['1.0625rem', { lineHeight: '1.625rem' }], // 17px (was 16px)
    			lg: ['1.1875rem', { lineHeight: '1.875rem' }], // 19px (was 18px)
    			xl: ['1.375rem', { lineHeight: '1.875rem' }], // 22px (was 20px)
    			'2xl': ['1.625rem', { lineHeight: '2.125rem' }], // 26px (was 24px)
    			'3xl': ['2rem', { lineHeight: '2.375rem' }], // 32px (was 30px)
    			'4xl': ['2.5rem', { lineHeight: '2.75rem' }], // 40px (was 36px)
    			'5xl': ['3.25rem', { lineHeight: '1' }], // 52px (was 48px)
    			'6xl': ['4rem', { lineHeight: '1' }], // 64px (was 60px)
    			'7xl': ['4.75rem', { lineHeight: '1' }], // 76px (was 72px)
    		},
    		colors: {
    			background: 'hsl(var(--background) / <alpha-value>)',
    			foreground: 'hsl(var(--foreground) / <alpha-value>)',
    			card: {
    				DEFAULT: 'hsl(var(--card) / <alpha-value>)',
    				foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
    				foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
    				foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
    				foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
    				foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
    				foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
    				foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
    			},
    			border: 'hsl(var(--border) / <alpha-value>)',
    			input: 'hsl(var(--input) / <alpha-value>)',
    			ring: 'hsl(var(--ring) / <alpha-value>)',
    			chart: {
    				'1': 'hsl(var(--chart-1) / <alpha-value>)',
    				'2': 'hsl(var(--chart-2) / <alpha-value>)',
    				'3': 'hsl(var(--chart-3) / <alpha-value>)',
    				'4': 'hsl(var(--chart-4) / <alpha-value>)',
    				'5': 'hsl(var(--chart-5) / <alpha-value>)'
    			},
                ink: {
                    DEFAULT: 'var(--ink)',
                    deep: 'var(--ink-deep)',
                    soft: 'var(--ink-soft)'
                },
                gold: {
                    DEFAULT: 'hsl(var(--gold) / <alpha-value>)',
                    soft: 'hsl(var(--gold-soft) / <alpha-value>)'
                },
                cream: 'var(--cream)',
                line: 'hsl(var(--line) / <alpha-value>)',
                'on-gold': 'var(--on-gold)'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		animation: {
    			marquee: "marquee 20s linear infinite",
    		},
    		keyframes: {
    			marquee: {
    				"0%": { transform: "translateX(0%)" },
    				"100%": { transform: "translateX(-50%)" },
    			}
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
