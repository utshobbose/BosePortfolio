// tailwind.config.mjs
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        '3xl': '60px',
      },
    },
  },
  plugins: [],
};
