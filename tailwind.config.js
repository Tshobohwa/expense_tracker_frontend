/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wallet: "url('./public/wallet-backgound.jpg')",
      },
    },
  },
  plugins: [],
};
