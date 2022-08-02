import styled from 'styled-components';
import { containerStyle } from '../../styles/theme';

const Header = styled.div`
  background-image: url('./images/polygonBg.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  width: 350px;
  height: 330px;

  margin: 0 auto;

  text-align: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
  }
`;

const WhoSection = styled.div`
  ${containerStyle}
`;

const WhatSection = styled.div`
  ${containerStyle}
`;

const WhereSection = styled.div`
  ${containerStyle}
`;

export default {
  Header,
  WhoSection,
  WhatSection,
  WhereSection,
};
