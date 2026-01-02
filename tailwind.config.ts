import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#05060a',
        'background-secondary': '#0a0d14',
        'electric-blue': '#3b82f6',
        'electric-blue-light': '#38bdf8',
        'electric-blue-dark': '#2563eb',
        'muted-gray': '#64748b',
        'muted-blue': '#1e293b',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.4)',
        'glow-hover': '0 0 25px rgba(59, 130, 246, 0.5)',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 20px rgba(59, 130, 246, 0.3)',
          },
          '100%': {
            'box-shadow': '0 0 30px rgba(59, 130, 246, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config

