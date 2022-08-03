import styled from 'styled-components';
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

  font-size: 80px;
  line-height: 0.6;
  color: ${colors.tertiary};

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 110px;
  }

  span {
    display: inline-block;
    width: 100%;

    &:first-child {
      font-size: 125px;
      text-align: left;
    }

    &:not(:first-child) {
      text-align: right;
    }
  }
`;

const HeaderDate = styled.h2`
  margin-top: 40px;

  font-family: ${font.family.tertiary};
  font-size: 32px;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 70px;
    font-size: 28px;
  }
`;

const WhoSection = styled.div`
  ${containerStyle}
`;

const WhatSection = styled.div`
  ${containerStyle}
`;

const WhereSection = styled.div`
  ${containerStyle}
`;

export default {
  Header,
  HeaderWrapper,
  HeaderTitle,
  HeaderDate,
  WhoSection,
  WhatSection,
  WhereSection,
};
