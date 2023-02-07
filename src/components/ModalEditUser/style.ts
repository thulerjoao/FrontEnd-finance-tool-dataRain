import styled from "styled-components";
import theme from "../../styles/theme";

export const FormEdit = styled.form`
  display: flex;
  width: 90%;
  height: 80%;
  flex-direction: column;
  align-items: center;
`;
export const ButtonsContainer = styled.div`
  height: 4.375rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2%;
  margin-top: 5%;

  .buttonCancel {
    background-color: ${theme.colors.backgroundColor};
    height: 5vh;
    width: 30%;
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
    width: 30%;
    font-weight: 700;
    font-size: ${theme.constants.buttonFontSize};
  }
  .buttonRegister:hover {
    background-color: ${theme.colors.tertiaryColor};
  }
`;

//new

export const EditUserTitle = styled.div`
  border-radius: 15px 15px 0 0;
  display: flex;
  width: 100%;
  height: 4.375rem;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primaryColor};
  margin-bottom: 30px;

  .title-user {
    margin-left: 5%;
    font-size: ${theme.constants.fontHeader};
    color: ${theme.colors.fundamentalColor};
  }
`;

export const InputsEditUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  text-align: start;
  width: 80%;
  padding-left: 2%;
  margin-top: 1%;
  font-size: ${theme.constants.smallFont};
  color: ${theme.colors.fundamentalColor};
`;

export const InputEditUser = styled.input`
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
