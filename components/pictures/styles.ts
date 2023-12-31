import styled from 'styled-components';
import { containerStyle, titleStyle } from '../../styles/theme';

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

export default {
  ContentWrapper,
  ContentContainer,
};
