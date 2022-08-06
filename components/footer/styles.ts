import styled from 'styled-components';
import { colors, containerStyle } from '../../styles/theme';

const Container = styled.footer`
  width: 100%;
  margin: 50px auto 0;
  background-color: ${colors.lightGreen};
`;

const Wrapper = styled.div`
  ${containerStyle}

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 25px !important;
  padding-bottom: 25px !important;
`;

export default {
  Container,
  Wrapper,
};
