/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '317': '420px',
        '780': '780px',
      },
      height: {
        '255': '390px',
        '443': '443px',
      },
      inset: {
        '-138': '-138px',
        '802': '802px',
      },
      borderRadius: {
        'custom': '2px 0px 0px 0px',
      },
    },
  },
  plugins: [],
}

