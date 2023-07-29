import styled, { css } from 'styled-components';
import { breakpoints, buttonStyle, colors, linkStyle } from '../../../../../../styles/theme';

const wrapperStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: hidden;
`;

const FilterWrapper = styled.div`
  ${wrapperStyle}
  backdrop-filter: blur(6px);
`;

const Wrapper = styled.div`
  ${wrapperStyle}
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  max-width: 700px;

  background-color: ${colors.lightGreen};
  border-radius: 25px;
  box-shadow: 9px 9px 20px rgba(0, 0, 0, 0.15);

  h4::selection,
  p::selection,
  input::selection,
  textarea::selection {
    background: #e9f2ed !important;
  }
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

  max-height: 80vh;
  overflow: scroll;

  padding: 45px 15px 15px;

  > div,
  > p,
  > h4 {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }

  input {
    width: 100%;
    max-width: 300px;
    margin: 10px auto 15px;
  }
`;

const TextWrapper = styled.div`
  margin: 15px auto;
`;

const InputWrapper = styled.div`
  margin: 30px 0 30px;
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

  &.disabled {
    cursor: default !important;
    pointer-events: none;
    opacity: 0.5;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  margin: 30px auto 0;

  @media (max-width: ${breakpoints.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const CloseButtonWrapper = styled.div`
  margin: 30px auto 0;
`;

const Button = styled.div`
  ${buttonStyle}
  width: 250px;
  margin: 15px auto;

  &.disabled {
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
  }
`;

const Declinebutton = styled.div`
  ${linkStyle}
  text-align: center;
  font-size: 14px;

  &.disabled {
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 10px;
  font-style: italic;
  color: ${colors.error};
`;

const SuccessMessage = styled.p`
  margin-top: 10px;
  font-style: italic;
  color: ${colors.primary};
`;

export default {
  FilterWrapper,
  Wrapper,
  Background,
  Container,
  CloseButton,
  Content,
  TextWrapper,
  InputWrapper,
  AddButton,
  ButtonWrapper,
  CloseButtonWrapper,
  Button,
  Declinebutton,
  ErrorMessage,
  SuccessMessage,
};
