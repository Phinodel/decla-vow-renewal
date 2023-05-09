import styled from 'styled-components';
import { font, colors, breakpoints } from '../../styles/theme';

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
    background-image: url('./images/polygonAlt.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    width: 100%;
    max-width: 680px;
    height: 680px;

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

  line-height: 1;
  color: ${colors.tertiary};

  @media (max-width: ${breakpoints.mobile}px) {
    width: 265px;
    margin-top: 110px;
  }

  span {
    display: inline-block;
    width: 100%;

    &:first-child {
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

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 70px;
  }
`;

const GreenBackground = styled.div`
  position: relative;

  div {
    position: absolute;
    top: -600px;
    left: -223px;
    z-index: 0;

    @media (max-width: ${breakpoints.mobile}px) {
      top: -320px;
    }
  }
`;

const GreenLinesBackground = styled.div`
  position: relative;

  div {
    position: absolute;
    bottom: -290px;
    right: -15px;
    z-index: 0;

    @media (max-width: ${breakpoints.mobile}px) {
      bottom: -450px;
      right: -200px;
    }
  }
`;

const LeafsBackground = styled.div`
  position: relative;

  div {
    position: absolute;
    left: -180px;
    bottom: 100px;
    z-index: 0;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;

    width: 190px;
    height: 305px;

    right: 0%;
    top: -240px;

    background-image: url('./images/circles.svg');
    background-size: 215px 300px;

    opacity: 0.5;
  }
`;

export default {
  Header,
  HeaderWrapper,
  HeaderTitle,
  HeaderDate,
  GreenBackground,
  GreenLinesBackground,
  LeafsBackground,
};
