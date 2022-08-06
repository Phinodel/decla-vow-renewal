import { DefaultTheme, css } from 'styled-components';

const primaryColor = '#F7934C';
const secondaryColor = '#FBB13C';
const tertiaryColor = '#2C6E49';

const mediumGreen = '#4C956C';
const lightGreen = '#C9DFD3';
const barelyGreen = '#F6FAF7';
const flashyGreen = '#7FD8AF';

const textColors = {
  dark: tertiaryColor,
  light: lightGreen,
  highLight: primaryColor,
};

export const colors = {
  white: '#ffffff',
  black: '#000000',
  error: '#f52d00',
  primary: primaryColor,
  secondary: secondaryColor,
  tertiary: tertiaryColor,
  mediumGreen,
  lightGreen,
  barelyGreen,
  flashyGreen,
  text: textColors,
};

export const font = {
  family: {
    primary: 'Poppins, Helvetica, sans-serif',
    secondary: 'Ephesis, Helvetica, sans-serif',
    tertiary: 'Murecho, Poppins, Helvetica, sans-serif',
  },
  sizes: {
    titles: {
      h1: '80px',
      h2: '32px',
      h3: '72px',
      h4: '18px',
      h5: '16px',
      h6: '16px',
    },
    titlesMobile: {
      h1: '70px',
      h2: '28px',
      h3: '65px',
      h4: '16px',
      h5: '16px',
      h6: '16px',
    },
    body: {
      extraLarge: '24px',
      large: '20px',
      standard: '18px',
      medium: '16px',
      small: '12px',
      extraSmall: '11px',
    },
  },
};

export const breakpoints = {
  large: 1280,
  desktop: 960,
  tablet: 760,
  mobile: 560,
};

const theme: DefaultTheme = {
  colors,
  font,
  breakpoints,
};

export const containerStyle = css`
  width: 100%;
  max-width: ${breakpoints.desktop}px;
  margin: 0 auto;
  padding: 0 25px;

  @media (max-width: ${breakpoints.tablet}px) {
    padding: 0 50px;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    padding: 0 25px;
  }
`;

export default theme;
