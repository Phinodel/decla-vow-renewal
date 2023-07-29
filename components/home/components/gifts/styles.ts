import styled from 'styled-components';
import { breakpoints, containerStyle, titleStyle } from '../../../../styles/theme';

const GiftsSection = styled.div`
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

  p {
    width: 80%;
    max-width: 600px;
    margin: 0 auto 25px 0;

    @media (max-width: ${breakpoints.mobile}px) {
      width: 100%;
      max-width: auto;
    }
  }
`;

export default {
  GiftsSection,
};
