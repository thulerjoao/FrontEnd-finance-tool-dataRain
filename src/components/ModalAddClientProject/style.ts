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

  *::-webkit-scrollbar {
    height: 95%;
    width: 10px;
    border-radius: 20px;
  }

  *::-webkit-scrollbar-track {
    background: #d1d1d1; // cor de fundo do scrol
    border-radius: 20px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ef8e1c; // cor do scroll
    border-radius: 20px;
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
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 5vh;
  border-radius: 8px;
  outline: none;
  border: 1px solid #c3c3c3;
  text-align: center;
`;

export const OptionsList = styled.datalist`
  width: 100%;
  height: 5vh;
  border-radius: 8px;
`;
