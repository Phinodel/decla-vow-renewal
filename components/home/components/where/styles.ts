import styled from 'styled-components';
import { breakpoints, containerStyle, titleStyle, linkStyle } from '../../../../styles/theme';

const WhereSection = styled.div`
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

  a {
    ${linkStyle}
  }
`;

const MapWrapper = styled.div`
  position: relative;
`;

const Map = styled.div`
  margin-top: 30px;

  iframe {
    border: none;
    background-color: #d8d8d8;
  }
`;

export default {
  WhereSection,
  MapWrapper,
  Map,
};
