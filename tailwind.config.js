/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'orange-dark-radial': 'radial-gradient(circle at 20% 70%, #D65A31, #222831)',
        // 'ellipse-center': 'radial-gradient(ellipse 1500px 700px at 30% 30%, #D65A31, #1c1d1f)',
        // 'ellipse-center': 'radial-gradient(circle at top right, #D65A31, #202020)',
        'ellipse-center': 'radial-gradient(circle at top right, #D65A31 0%, #D65A31 10%, #202020 60%)',



      },
    },
  },
  plugins: [],
}

