import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const CreateAccountContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 5.3rem);
  `}
`;

export const CreateAccountCard = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 80vh;
  box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
  width: 32vw;
  max-width: 39rem;
  border-radius: 15px;
  background-color: #f8fafb;
  padding: 0;
  margin-top: -1rem;
`;

export const CreateUserTitleContainer = styled.div`
    border-radius: 15px 15px 0 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    width: 100%;
    height: 4.375rem;
    align-items: center;
    background-color: ${theme.colors.primaryColor};


    .h1title {
      margin-left: 5%;
      font-size: ${theme.constants.fontHeader};
      color: ${theme.colors.fundamentalColor}
    }
`;

export const UserPhotoContainer = styled.div`
  display: flex;
  height: 12vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: .5%;

  .imagesProfile {
    height: 100%;
    width: 12vh;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  /* height: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  section{
    display: flex;
    flex-direction: column;
    width: 80%;

    select{
              height: 3.5vh;
              border: none;
              border-radius: 5px;
              border: 1px solid #D1D1D1;

              option{
                width: 100%;
                text-align: center;
                font-size: ${theme.constants.fontBody};
              }

            }
  }
`;

export const Inputs = styled.input`
  all: unset;
  border: 1px solid #D1D1D1;
  border-radius: 4px;
  font-size: ${theme.constants.smallFont};
  padding: 0 9px;
  height: 3.5vh;
  box-sizing: border-box;
  width: 80%;
  background-color: ${theme.colors.primaryColor};

  ::-webkit-input-placeholder {
    color: ${theme.colors.inputFontColor};
  }
`;
export const ButtonsContainer = styled.div`
  height: 4.375rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2%;

  .buttonCancel{
    background-color: ${theme.colors.backgroundColor};
    height: 5vh;
    width: 30%;
    font-size: ${theme.constants.buttonFontSize};
    font-weight: 700;
    color: ${theme.colors.darkGrey};
    }
        .buttonCancel:hover{
          background-color: ${theme.colors.backgroundColor};
  }

  .buttonRegister{
      background-color: ${theme.colors.tertiaryColor};
      height: 5vh;
      width: 30%;
      font-weight: 700;
      font-size: ${theme.constants.buttonFontSize};
      }
        .buttonRegister:hover{
          background-color: ${theme.colors.tertiaryColor};
  }

`;


export const InputLabel = styled.label`
    text-align: start;
    width: 80%;
    padding-left: 2%;
    margin-top: 1%;
    font-size: ${theme.constants.smallFont};
    color: ${theme.colors.fundamentalColor}
`;
 