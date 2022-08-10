import styled from 'styled-components';
import { colors, font, breakpoints, containerStyle, linkStyle } from '../../styles/theme';

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto 50px;
  z-index: 100;
  color: ${colors.tertiary};
`;

const Wrapper = styled.div`
  ${containerStyle}

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 25px !important;
  padding-bottom: 25px !important;

  ul {
    li {
      transition: all 0.5s ease;

      display: inline-block;
      margin-left: 8px;
      opacity: 50%;

      a {
        text-decoration: none;
      }

      &.link:hover {
        opacity: 80%;
      }

      &.active {
        opacity: 100%;
      }
    }
  }
`;

const BackContainer = styled.div`
  a {
    ${linkStyle}

    font-size: ${font.sizes.body.medium};
    color: ${colors.primary};
    border-bottom-color: ${colors.primary};

    &:hover {
      color: ${colors.secondary};
      border-bottom-color: ${colors.secondary};
    }
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;

  width: 50vw;
  height: 44vw;

  background-image: url('./images/simpleOrangeCircleBg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left bottom;

  @media (max-width: ${breakpoints.tablet}px) {
    width: 65vw;
    height: 54vw;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: 85vw;
    height: 75vw;
  }
`;

const BackgroundLeafs = styled.div`
  background-image: url('./images/orangeLeafs.svg');
  background-repeat: no-repeat;
  background-size: 45%;
  background-position: left bottom;

  width: 100%;
  height: 100%;

  transform: rotate(180deg);
  opacity: 7%;
`;

export default {
  Container,
  Wrapper,
  BackContainer,
  BackgroundLeafs,
  Background,
};
