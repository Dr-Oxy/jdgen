/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       li: {
      //         marginTop: '4px',
      //         marginBottom: '4px',
      //       },
      //     },
      //   },
      // }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
