import styled from 'styled-components';
import { containerStyle } from '../../styles/theme';

const Container = styled.div`
  width: 100%;
  margin: 0 auto 50px;
`;

const Wrapper = styled.div`
  ${containerStyle}

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding-top: 25px;
  padding-bottom: 25px;

  ul {
    li {
      display: inline-block;
    }
  }
`;

export default {
  Container,
  Wrapper,
};
