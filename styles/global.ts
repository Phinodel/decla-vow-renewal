/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import { colors, font, breakpoints } from './theme';

export const GlobalStyle = createGlobalStyle`
  /* RESET | meyerweb.com/eric/tools/css/reset | v2.0 | 20110126 */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    overflow-wrap: break-word;
    -webkit-font-smoothing: antialiased;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input, textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button {
    -webkit-appearance: none;
  }

  a {
    color: inherit;
  }

  /* END OF RESET */

  html, body {
    position: relative;
    background: ${colors.white};
    font-family: ${font.family.primary};
    font-weight: 400;
    font-size: ${font.sizes.body.standard};
    line-height: 1.4;
    color: ${colors.text.dark};
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  ::selection {
    background: ${colors.text.highLight};
  }

  *::-moz-focus-inner {
    border: 0;
  }

  *:focus {
    outline: none;
  }

  h1 {
    font-family: ${font.family.secondary};
    font-size: ${font.sizes.titlesMobile.h1};
    color: ${colors.secondary};

    @media (min-width: ${breakpoints.mobile}px) {
      font-size: ${font.sizes.titles.h1};
    }
  }

  h2 {
    font-family: ${font.family.secondary};
    font-size: ${font.sizes.titlesMobile.h2};
    color: ${colors.primary};

    @media (min-width: ${breakpoints.mobile}px) {
      font-size: ${font.sizes.titles.h2};
    }
  }

  h3 {
    font-family: ${font.family.secondary};
    font-size: ${font.sizes.titlesMobile.h3};

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: ${font.sizes.titles.h3};
    }
  }

  h4 {
    font-family: ${font.family.secondary};
    font-size: ${font.sizes.titlesMobile.h4};

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: ${font.sizes.titles.h4};
    }
  }

  h5 {
    font-family: ${font.family.secondary};
    font-size: ${font.sizes.titlesMobile.h5};

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: ${font.sizes.titles.h5};
    }
  }

  h6 {
    font-family: ${font.family.secondary};
    font-size: ${font.sizes.titlesMobile.h6};

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: ${font.sizes.titles.h6};
    }
  }

  img {
    -webkit-user-drag: none;
    user-select: none;
  }

  input {
    outline: none;
    border: none;
    background-color: transparent;

    width: 100%;
    margin: 5px 0 15px;
    padding: 5px 5px 0 0;
    color: ${colors.tertiary};
    border-bottom: 1px solid ${colors.tertiary};
    font-size: 16px;

    &::placeholder {
      color: ${colors.tertiary};
      opacity: 0.3;
    }

    &:-ms-input-placeholder {
      color: ${colors.tertiary};
      opacity: 0.3;
    }

    &::-ms-input-placeholder {
      color: ${colors.tertiary};
      opacity: 0.3;
    }

    &.error {
      border-bottom-color: ${colors.error};
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  textArea {
    outline: none;
    background-color: transparent;
    resize: none;

    font-family: ${font.family.primary};
    font-weight: 400;
    font-size: 16px;
    color: ${colors.tertiary};
    line-height: 1.4;

    width: 90%;
    max-width: 350px;
    height: 40px;
    margin: 0 auto;
    padding: 15px 12px;

    border-radius: 25px;
    border: 1px solid ${colors.tertiary};

    &:disabled {
      opacity: 0.5;
      border: 1px solid ${colors.tertiary};
    }

    &::placeholder {
      color: ${colors.tertiary};
      opacity: 0.3;
    }

    &:-ms-input-placeholder {
      color: ${colors.tertiary};
      opacity: 0.3;
    }

    &::-ms-input-placeholder {
      color: ${colors.tertiary};
      opacity: 0.3;
    }
  }

`;
