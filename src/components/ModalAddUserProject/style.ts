import styled from "styled-components";
import theme from "../../styles/theme";

export const ButtonsContainer = styled.div`
  height: 4.375rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2%;
  margin-top: 40px;

  .buttonCancel {
    background-color: ${theme.colors.backgroundColor};
    height: 5vh;
    width: 45%;
    font-size: ${theme.constants.buttonFontSize};
    font-weight: 700;
    color: ${theme.colors.darkGrey};
  }
  .buttonCancel:hover {
    background-color: ${theme.colors.darkGrey};
    color: ${theme.colors.primaryColor};
  }

  .buttonSave {
    background-color: ${theme.colors.tertiaryColor};
    height: 5vh;
    width: 45%;
    font-weight: 700;
    font-size: ${theme.constants.buttonFontSize};
  }
  .buttonRegister:hover {
    background-color: ${theme.colors.tertiaryColor};
  }
`;

export const Label = styled.label`
  text-align: start;
  width: 50%;
  padding-left: 2%;
  margin-top: 1%;
  font-size: ${theme.constants.smallFont};
  color: ${theme.colors.fundamentalColor};
`;

export const Input = styled.input`
   all: unset;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  font-size: ${theme.constants.smallFont};
  padding: 0 9px;
  height: 3.5vh;
  box-sizing: border-box;
  width: 80%;
  background-color: ${theme.colors.primaryColor};
`