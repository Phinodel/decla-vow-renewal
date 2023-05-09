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
  highLight: 'rgba(201, 223, 211, 0.4)',
  backgroundHighlight: '#fef3e2',
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
      h4: '45px',
      h5: '34px',
      h6: '34px',
    },
    titlesMobile: {
      h1: '70px',
      h2: '28px',
      h3: '65px',
      h4: '36px',
      h5: '32px',
      h6: '32px',
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
  position: relative;
  z-index: 101;

  width: 100%;
  max-width: ${breakpoints.desktop}px;
  margin: 0 auto;
  padding: 0 25px;

  @media (max-width: ${breakpoints.desktop}px) {
    padding: 0 50px;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0 25px;
  }
`;

export const titleStyle = css`
  .wrapper {
    position: relative;
  }

  .title {
    position: relative;
    z-index: 101;
  }

  .bg {
    display: inline-block;
    position: absolute;
    bottom: 20px;
    right: -15px;
    z-index: 0;

    width: 85%;
    height: 20px;
    background-color: ${colors.lightGreen};
  }
`;

export const linkStyle = css`
  text-decoration: underline;

  @media (min-width: ${breakpoints.tablet}px) {
    transition: all 0.4s ease;
    display: inline-block;
    margin-bottom: 0px;
    padding-bottom: 4px;

    cursor: pointer;
    text-decoration: none;
    line-height: 0.9;

    border-bottom: 1px solid ${colors.tertiary};

    &:hover {
      margin-bottom: 4px;
      padding-bottom: 0px;

      color: ${colors.mediumGreen};
      border-bottom-color: ${colors.mediumGreen};
    }
  }
`;

export const buttonStyle = css`
  transition: all 0.5s ease;

  cursor: pointer;
  padding: 12px 25px;
  background-color: ${colors.secondary};
  color: ${colors.white};
  text-align: center;
  border-radius: 25px;

  &:hover {
    background-color: ${colors.primary};
  }
`;

export const slantedStyle = css`
  margin-top: 20px;
  font-style: italic;
  font-size: ${font.sizes.body.medium};
`;

export const highlightedStyle = css`
  display: inline-block;
  margin: 4px 0px;
  padding: 0px 4px;

  color: ${colors.secondary};
  background-color: ${colors.text.backgroundHighlight};
`;

export default theme;
