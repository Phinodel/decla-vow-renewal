import styled from 'styled-components';
import { containerStyle, titleStyle } from '../../styles/theme';

const BackContainer = styled.div``;

const ContentContainer = styled.div`
  position: relative;
  z-index: 101;
  ${containerStyle}
  margin-bottom: 60px;

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
  BackContainer,
  ContentContainer,
  ContactDetailsWrapper,
  ContactDetails,
  BoldTitle,
};
