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
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
                ink: {
                    DEFAULT: 'var(--ink)',
                    deep: 'var(--ink-deep)',
                    soft: 'var(--ink-soft)'
                },
                gold: {
                    DEFAULT: 'var(--gold)',
                    soft: 'var(--gold-soft)'
                },
                cream: 'var(--cream)',
                line: 'var(--line)',
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
