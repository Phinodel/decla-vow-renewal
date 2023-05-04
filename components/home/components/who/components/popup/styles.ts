import styled from 'styled-components';
import { breakpoints, buttonStyle, colors, linkStyle } from '../../../../../../styles/theme';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: hidden;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.05;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  max-width: 650px;

  background-color: ${colors.lightGreen};
  border-radius: 25px;
  box-shadow: 9px 9px 20px rgba(0, 0, 0, 0.15);
`;

const CloseButton = styled.div`
  transition: all 0.5s ease;

  position: absolute;
  right: 15px;
  top: 15px;
  width: 32px;
  height: 32px;
  opacity: 0.25;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 14px;
    content: ' ';
    height: 24px;
    width: 2px;
    background-color: ${colors.tertiary};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const Content = styled.div`
  text-align: center;
  padding: 45px 15px 15px;

  max-height: 80vh;
  overflow: scroll;
`;

const AddButton = styled.div`
  transition: all 0.5s ease;

  width: 35px;
  height: 35px;
  margin: 15px auto;

  opacity: 0.5;

  font-size: 27px;
  color: ${colors.white};
  background-color: ${colors.tertiary};
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;

  margin: 45px auto 0;

  @media (max-width: ${breakpoints.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Button = styled.div`
  ${buttonStyle}
  width: 300px;
  margin: 15px 0;
`;

const Declinebutton = styled.div`
  ${linkStyle}
  text-align: center;
`;

export default {
  Wrapper,
  Background,
  Container,
  CloseButton,
  Content,
  AddButton,
  ButtonWrapper,
  Button,
  Declinebutton,
};
