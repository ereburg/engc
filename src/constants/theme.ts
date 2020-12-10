export const colors = {
  black: '#000000',
  blackText: '#3d3d3d',
  brownLight: '#FBF4F4',
  brown: '#B07773',
  brownDark: '#9B504B',
  outline: 'rgba(77, 144, 254, 0.6)',
  red: 'red',
  blueDark: '#12171a',
  blue: '#127efb',
  white: '#FFFFFF',
  yellow: '#FFD800',
  yellowDark: '#f4c02e',
  yellowLight: '#ffe16c',
  gray: 'rgb(235, 242, 252)',
  grayOpacity: 'rgba(235, 242, 252, 0.9)',
  darkText: '#16161a',
  border: '#efefef',
  green: '#12cf7c',
  greenHover: '#10BA70',
  grayBg: '#fbfbfb',
  prefixColor: '#DADADA',
  tabsButtonColor: '#f4f4f4',
  tabsButtonColorHover: '#e7e7e7',
} as const;

/** Source: https://htmlacademy.ru/blog/useful/css/short-14 */
const fallbackFont = [
  '-apple-system',
  "'BlickMacSystemFont'",
  "'Segoe UI'",
  "'Roboto'",
  "'Oxygen'",
  "'Ubuntu'",
  "'Cantarell'",
  "'Fira Sans'",
  "'Droid Sans'",
  "'Helvetica Neue'",
  'sans-serif',
].join(',');

export const fonts = {
  MuseoSans: `'MuseoSans', ${fallbackFont}`,
};
