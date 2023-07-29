import styled from 'styled-components';
import { breakpoints, containerStyle, titleStyle, linkStyle } from '../../../../styles/theme';

const AccommodationSection = styled.div`
  ${containerStyle}
  margin-top: 80px;
  margin-bottom: 80px;

  text-align: right;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  h3 {
    ${titleStyle}
  }

  p {
    width: 80%;
    max-width: 500px;
    margin: 0 0 25px auto;
  }

  a {
    ${linkStyle}
  }

  table {
    width: 100%;
    max-width: 600px;
    margin-top: 25px;
    margin-left: auto;
  }

  tr {
    td {
      text-align: left;
      padding: 8px 0 0 15px;

      &:last-child {
        text-align: right;
      }
    }

    .distance {
      width: 80px;
      margin-bottom: 20px;
    }
  }
`;

export default {
  AccommodationSection,
};
