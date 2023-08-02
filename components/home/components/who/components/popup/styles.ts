import styled, { css } from 'styled-components';
import { breakpoints, buttonStyle, colors, font, linkStyle } from '../../../../../../styles/theme';

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
  max-width: 750px;

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

  max-height: 90vh;
  overflow: scroll;

  padding: 45px 15px 15px;

  > div,
  > p,
  > h4 {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  input {
    width: calc(100% - 75px);
    max-width: 300px;
    margin: 10px auto 15px;
    padding-right: 75px;
  }
`;

const TextWrapper = styled.div`
  margin: 15px auto;
  font-size: ${font.sizes.body.medium};
`;

const InputWrapper = styled.div`
  margin: 30px 0 30px;
`;

const RemoveButton = styled.div`
  display: inline-block;
  width: 70px;
  margin-left: -70px;
  font-size: ${font.sizes.body.small};
  text-align: right;
  cursor: pointer;

  &.disabled {
    cursor: default !important;
    pointer-events: none;
    opacity: 0.5;
  }
`;

const AddButton = styled.div`
  transition: all 0.5s ease;

  width: fit-content;
  padding: 8px 20px;
  margin: 15px auto;

  opacity: 0.5;
  text-align: center;

  color: ${colors.white};
  background-color: ${colors.tertiary};
  border-radius: 25px;
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
  width: fit-content;
  margin: 15px auto;
  padding: 12px 40px;

  &.disabled {
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
  }
`;

const DeclineButton = styled.div`
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
  RemoveButton,
  AddButton,
  ButtonWrapper,
  CloseButtonWrapper,
  Button,
  DeclineButton,
  ErrorMessage,
  SuccessMessage,
};
