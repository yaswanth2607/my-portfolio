import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    #root{
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

export const BackgroundOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  width: min(92vw, 700px);
  min-height: 400px;
  max-height: 85vh;
  border-radius: 24px;
`;

export const ModalTitle = styled.div``;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  font-size: 32px;
  font-family: cursive;
  font-weight: bold;
`;

export const ModalBody = styled.div`
  display: flex;
  padding: 24px;
  gap: 36px;
`;

export const ModalFooter = styled.div``;

export const CustomFormLayout = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 40% 40%;
  gap: 0px 16px;

  font-family: "Cause", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.625rem 0;
  font-size: 0.875rem;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #4b5563;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;

  &:focus {
    outline: none;
    border-bottom-color: #3b82f6;
    box-shadow: none;
  }
`;

export const StyledInputTextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.625rem 0;
  font-size: 0.875rem;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #4b5563;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  height: 16px;
  resize: none;
  &:focus {
    outline: none;
    border-bottom-color: #3b82f6;
    box-shadow: none;
  }
`;

export const StyledInputContainer = styled.div`
  position: relative;
  margin-bottom: 36px;
  input, textarea {
    &:focus + label,
    &:not(:placeholder-shown) + label {
      transform: translateY(-24px) scale(0.75);
      color: #3b82f6;
    }

    &:placeholder-shown + label {
      transform: translateY(0) scale(1);
      color: #4b5563;
    }
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 0.75rem;
  left: 0;
  font-size: 0.875rem;
  color: #4b5563;
  transform-origin: left top;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
  z-index: 1;
`;
