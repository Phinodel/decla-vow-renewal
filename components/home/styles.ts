import styled from 'styled-components';
import { font, colors, breakpoints, containerStyle, titleStyle } from '../../styles/theme';

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

const WhoSection = styled.div`
  position: relative;
  z-index: 101;
  ${containerStyle}
  margin-top: 100px;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 80px;
  }

  h3 {
    ${titleStyle}
  }
`;

const slantedText = styled.p`
  margin-top: 20px;
  font-style: italic;
  font-size: ${font.sizes.body.medium};
`;

const highlightedText = styled.span`
  display: inline-block;
  margin: 4px 0px;
  padding: 0px 4px;

  color: ${colors.secondary};
  background-color: #fef3e2;
`;

const GreenBackground = styled.div`
  position: relative;

  div {
    position: absolute;
    top: -550px;
    left: -225px;
    z-index: 0;

    @media (max-width: ${breakpoints.mobile}px) {
      top: -250px;
    }
  }
`;

const WhatSection = styled.div`
  position: relative;
  z-index: 101;
  ${containerStyle}

  margin-top: 80px;
  text-align: right;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 60px;
  }

  h3 {
    ${titleStyle}
  }

  > div {
    max-width: 440px;
    margin-left: auto;
  }
`;

const GreenLinesBackground = styled.div`
  position: relative;

  div {
    position: absolute;
    bottom: -450px;
    right: -15px;
    z-index: 0;

    @media (max-width: ${breakpoints.mobile}px) {
      bottom: -450px;
      right: -200px;
    }
  }
`;

const WhereSection = styled.div`
  position: relative;
  z-index: 101;
  ${containerStyle}
  margin-top: 80px;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  h3 {
    ${titleStyle}
  }
`;

const MapWrapper = styled.div`
  position: relative;
`;

const Map = styled.div`
  margin-top: 30px;

  iframe {
    border: none;
    background-color: #d8d8d8;
  }
`;

export default {
  Header,
  HeaderWrapper,
  HeaderTitle,
  HeaderDate,
  WhoSection,
  slantedText,
  highlightedText,
  GreenBackground,
  WhatSection,
  GreenLinesBackground,
  WhereSection,
  MapWrapper,
  Map,
};
