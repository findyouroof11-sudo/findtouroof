/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        clash: ['clash-grotesk', 'system-ui', 'sans-serif'], // Placeholder for Clash Grotesk
      },
      colors: {
        lime: {
          400: '#CCFF00',
          300: '#d9ff33',
          500: '#b3e600',
        },
        magenta: {
          400: '#E6007A',
          300: '#ff3399',
          500: '#cc0066',
        },
        gray: {
          50: '#F5F5F5',
          900: '#121212',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};