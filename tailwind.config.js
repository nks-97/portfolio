/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'orange-dark-radial': 'radial-gradient(circle at 20% 70%, #D65A31, #222831)',
        'ellipse-center': 'radial-gradient(circle at top right, #D65A31 0%, #D65A31 10%, #202020 60%)',
      },
      colors: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
    },
  },
  plugins: [],
}

