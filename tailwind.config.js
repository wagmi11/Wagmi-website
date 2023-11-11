/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      dark: '#303030',
      darkBorder: '#505050',
      white: '#fff',
      blue: '#615CFF',
      grey: '#8F8F8F',
      green: '#37B06F',
      yellow: '#FFB63B',
      violet: '#784FFE',
      blueVariant: '#2664FB',
      offWhite: '#FFFEFE',
      tonBg: '#242424',
      gray: '#aeaeae',
      sectionBg: "#F2F3F4"
    },
    fontFamily: {
      'sans': ['Inter'],
      'header': ['Satoshi']
    }
  },
  plugins: [],
};
