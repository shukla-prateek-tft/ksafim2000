// theme.ts
const theme = {
  colors: {
    primary: 'rgb(16, 16, 37)',
    inputFocus: '#007bff',
    primaryLight: '#56c4ff',
    themeWhite: 'white',
    shadow: 'rgba(0, 0, 0, 0.289)',
    shadowGrey: '#4d4a4a4f',
    shadowLightGrey: '#0f0f0f3a',
    black: '#000000',
    secondary: '#141e30',
    error: 'red',
    gray: '#888888',
    white: '#ffffff',
    red: '#ff0000',
    disabled: '#D3D3D3',
    lightGray: 'lightgray',
    editBtn: '#f7bb07',
    saveBtn: 'rgb(38, 162, 68)',
    deleteBtn: '#c00001',
    themePrimary: '#4e73df',
    themePrimaryLight: '#6c8bff',
    themeSecondary: '#d5e5ff',
    themeButton: 'rgb(192, 192, 192)',
    themeButtonSecondary: 'rgb(211,211,211)',
    themeInputGrayBorder: '#ccc',
    themePurple: '#6f42c1',
    theme_primary: '#4e73df'
  },
  breakpoints: {
    laptop: 'screen and (max-width: 1800px)',
    mLaptop: 'screen and (max-width: 1500px)',
    sLaptop: 'screen and (max-width: 1300px)',
    tablet: 'screen and (max-width: 1124px)',
    tablet2: 'screen and (max-width: 1024px)',
    pablet: 'screen and (max-width: 700px)',
    mobile: 'screen and (max-width: 500px)',
    mMobile: 'screen and (max-width: 420px)',
    sMobile: 'screen and (max-width: 370px)',
    xsMobile: 'screen and (max-width: 340px)'
  },
  fontSize: {
    root: '16px',
    base: '1rem', // 16px
    xxSmall: '10px', // $font-size-xx-small
    xSmall: '12px', // $font-size-x-small
    small: '14px', // $font-size-small
    medium: '18px', // $font-size-medium
    large: '20px', // $font-size-large
    xl: '24px', // $font-size-xl
    xxl: '32px' // $font-size-xxl
  },
  fontWeight: {
    thin: '100', // Font weight for thin text
    extraLight: '200', // Font weight for extra-light text
    light: '300', // Font weight for light text
    normal: '400', // Standard font weight
    medium: '500', // Font weight for medium text
    semiBold: '600', // Font weight for semi-bold text
    bold: '700', // Font weight for bold text
    extraBold: '800', // Font weight for extra-bold text
    black: '900' // Font weight for black text
  },
  margin: {
    large: '30px'
  },
  spacing: {
    sm: '7px 10px',
    md: '10px 18px',
    lg: '12px 25px'
  },
  borderRadius: '5px',
  boxShadow: '0px 0px 2px 0px rgb(0, 0, 0)'
};

export default theme;
