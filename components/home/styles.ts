import styled, { css } from 'styled-components';
import { font, colors, breakpoints, containerStyle } from '../../styles/theme';

const Header = styled.div`
  position: relative;
  z-index: 101;

  @media (max-width: ${breakpoints.tablet}px) {
    padding: 0 25px;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    margin-bottom: 80px;
  }

  & > div:first-child {
    background-image: url('./images/polygonBg.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    width: 100%;
    max-width: 490px;
    height: 460px;

    margin: 0 auto;

    text-align: center;

    @media (max-width: ${breakpoints.mobile}px) {
      max-width: 240px;
      height: 250px;
    }
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const HeaderTitle = styled.h1`
  width: 302px;
  margin-top: 75px;

  line-height: 0.6;
  color: ${colors.tertiary};

  @media (max-width: ${breakpoints.mobile}px) {
    width: 265px;
    margin-top: 110px;
  }

  span {
    display: inline-block;
    width: 100%;

    &:first-child {
      font-size: 125px;
      text-align: left;

      @media (max-width: ${breakpoints.mobile}px) {
        font-size: 110px;
      }
    }

    &:not(:first-child) {
      text-align: right;
    }
  }
`;

const HeaderDate = styled.h2`
  margin-top: 40px;

  font-family: ${font.family.tertiary};

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 70px;
  }
`;

const titleStyle = css`
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

const WhoSection = styled.div`
  position: relative;
  z-index: 101;
  ${containerStyle}
  margin-top: 100px;

  h3 {
    ${titleStyle}
  }
`;

const GreenBackground = styled.div`
  position: relative;

  div {
    position: absolute;
    top: -450px;
    left: -300px;
    z-index: 0;
  }
`;

const WhatSection = styled.div`
  position: relative;
  z-index: 101;
  ${containerStyle}

  margin-top: 100px;
  text-align: right;

  h3 {
    ${titleStyle}
  }

  > div {
    max-width: 440px;
    margin-left: auto;
  }
`;

const WhereSection = styled.div`
  position: relative;
  z-index: 101;
  ${containerStyle}
  margin-top: 100px;

  h3 {
    ${titleStyle}
  }
`;

export default {
  Header,
  HeaderWrapper,
  HeaderTitle,
  HeaderDate,
  WhoSection,
  GreenBackground,
  WhatSection,
  WhereSection,
};
