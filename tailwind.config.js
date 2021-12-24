module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#f5f5f5',
      secondary: '#141517',
      fourth: '#212226',
    }),
    extend: {
      height: {
        '5vh': '5vh',
        '10vh': '10vh',
        '90vh': '90vh',
      },
      // backgroundImage: {
      //   dark: 'url(./src/assets/sceenshot.png)',
      //   light: 'url(./src/assets/sceenshot2.png)',
      // },
      fontFamily: {
        headline: ['F1-Regular'],
        boldHeadline: ['F1-Bold'],
      },
      colors: {
        purple: '#793EF9',
        // pink: '#FE2782',
        primary: '#f5f5f5',
        secondary: '#141517',
        fourth: '#212226',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  //#endregion
  // daisyu: {
  //   daisyui: {
  //     themes: false,
  //     styled: true,
  //   },
  // },
};
