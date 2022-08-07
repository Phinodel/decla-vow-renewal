import styled from 'styled-components';
import { containerStyle, titleStyle } from '../../styles/theme';

const ContentContainer = styled.div`
  ${containerStyle}
  margin-bottom: 80px;

  h3 {
    ${titleStyle}
  }
`;

const ContactDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactDetails = styled.div`
  ul {
  }
`;

const BoldTitle = styled.div`
  font-weight: 600;
  margin: 20px 0 15px;
`;

export default {
  ContentContainer,
  ContactDetailsWrapper,
  ContactDetails,
  BoldTitle,
};
