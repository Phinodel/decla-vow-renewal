import styled from 'styled-components';
import { breakpoints, containerStyle, titleStyle } from '../../styles/theme';

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
  ContentContainer,
  ContactDetailsWrapper,
  ContactDetails,
  BoldTitle,
};
