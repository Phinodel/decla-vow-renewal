import styled from 'styled-components';
import {
  breakpoints,
  containerStyle,
  titleStyle,
  slantedStyle,
  highlightedStyle,
  buttonStyle,
} from '../../../../styles/theme';

const WhoSection = styled.div`
  ${containerStyle}
  margin-top: 0px;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 80px;
  }

  h3 {
    ${titleStyle}
  }

  &:before {
    content: '';
    display: block;
    position: absolute;

    width: 191px;
    height: 180px;
    left: 20%;
    top: 193px;

    background-image: url('./images/circles.svg');
    background-size: 171px 400px;

    transform: rotate(340deg);
    opacity: 0.5;
  }
`;

const Button = styled.div`
  ${buttonStyle}
  width: 300px;
  margin: 15px 0;
  position: relative;
`;

const slantedText = styled.p`
  ${slantedStyle};
`;

const highlightedText = styled.span`
  ${highlightedStyle};
`;

export default {
  WhoSection,
  Button,
  slantedText,
  highlightedText,
};
