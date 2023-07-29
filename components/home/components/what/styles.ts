import styled from 'styled-components';
import { font, colors, breakpoints, containerStyle, titleStyle } from '../../../../styles/theme';

const WhatSection = styled.div`
  ${containerStyle}

  margin-top: 80px;
  text-align: right;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 60px;
  }

  h3 {
    ${titleStyle}
  }

  > div {
    max-width: 440px;
    margin-left: auto;
  }
`;

const DressCode = styled.p`
  margin: 20px 0;
`;

const DresscodeHighlight = styled.span`
  margin-right: -25px;
  padding: 0 25px 0 5px;
  background-color: ${colors.text.backgroundHighlight};
`;

const ScheduleSection = styled.div`
  ${containerStyle}

  margin: 50px auto 0;
`;

const ScheduleSectionBackground = styled.div`
  background-image: url('./images/orangeBg.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  position: relative;

  width: 100%;
  height: 100vw;
  max-height: 400px;
`;

const Clock = styled.div`
  width: 100%;
  max-width: 500px;
  height: 400px;

  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;

  opacity: 0.1;
  border-radius: 50%;

  .pointer {
    position: absolute;
    margin: auto;
    left: 49%;
    bottom: 50%;
    background-color: ${colors.primary};
    width: 2%;
    height: 40%;
    transform: rotate(0);
    transform-origin: 50% 100%;
    border-radius: 40%;
  }

  .minute {
    transform: rotate(0);
    height: 48%;
    background-color: ${colors.primary};
  }

  .second {
    background-color: ${colors.secondary};
    width: 1%;
    left: 49.5%;
    transform: rotate(0);
    height: 48%;
  }
`;

const ScheduleContent = styled.div`
  width: 60%;
  max-width: 305px;
  margin: 0 auto;
  padding-top: 35px;
  text-align: center;

  h4 {
    font-size: ${font.sizes.body.extraLarge};
    font-family: ${font.family.primary};
    color: ${colors.primary};
    margin-bottom: 15px;
  }

  table {
    width: 100%;
  }

  thead {
    text-align: center;
  }

  td {
    width: 160px;
    padding-top: 15px;
    text-align: left;

    @media (max-width: ${breakpoints.mobile}px) {
      width: 100%;
    }
  }

  .label {
    text-align: right;
  }
`;

export default {
  WhatSection,
  DressCode,
  DresscodeHighlight,
  ScheduleSection,
  ScheduleSectionBackground,
  Clock,
  ScheduleContent,
};
