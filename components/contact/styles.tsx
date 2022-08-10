import styled from 'styled-components';
import { breakpoints, containerStyle, titleStyle } from '../../styles/theme';

const ContentWrapper = styled.div`
  min-height: calc(100vh - 251px);
`;

const ContentContainer = styled.div`
  ${containerStyle}
  margin-bottom: 80px;

  h3 {
    ${titleStyle}
  }
`;

const ContactDetailsWrapper = styled.div`
  @media (min-width: ${breakpoints.tablet}px) {
    display: flex;
    justify-content: space-between;
  }
`;

const ContactDetails = styled.div`
  ul {
  }
`;

const BoldTitle = styled.p`
  font-weight: 900;
  margin: 20px 0 5px;
`;

export default {
  ContentWrapper,
  ContentContainer,
  ContactDetailsWrapper,
  ContactDetails,
  BoldTitle,
};
