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
  margin-top: 100px;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 80px;
  }

  h3 {
    ${titleStyle}
  }
`;

const Button = styled.div`
  ${buttonStyle}
  width: 300px;
  margin: 15px 0;
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
