import styled from 'styled-components';
import { breakpoints, containerStyle, titleStyle } from '../../styles/theme';

const ContentWrapper = styled.div`
  min-height: calc(100vh - 252px);
`;

const ContentContainer = styled.div`
  ${containerStyle}
  margin-bottom: 80px;

  h3 {
    ${titleStyle}
  }

  p {
    max-width: 810px;
  }
`;

const ContactDetailsWrapper = styled.div`
  @media (min-width: ${breakpoints.tablet}px) {
    display: flex;
    justify-content: space-between;
  }
`;

const BoldTitle = styled.p`
  font-weight: 900;
  margin: 50px 0 5px;
`;

export default {
  ContentWrapper,
  ContentContainer,
  ContactDetailsWrapper,
  BoldTitle,
};
