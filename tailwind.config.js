/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2C5F2D',
        'earth-brown': '#8B5E3C',
        'golden-yellow': '#F0A500',
        'sky-blue': '#A2C8E1',
        'soft-beige': '#F4EAE6',
        'light-gray': '#D1D5DB',
        'dark-charcoal': '#333333',
        'off-white': '#FAFAFA',
      }
    },
  },
  plugins: [require('daisyui')],
}
