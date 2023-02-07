import { style } from "@mui/system";
import styled from "styled-components";
import theme from "../../styles/theme";

export const FormEdit = styled.form`
  display: flex;
  width: 90%;
  height: 80%;
  flex-direction: column;
  align-items: center;
`;

export const ButtonCancel = styled.button`
  font-size: 20px;
  border: 1px solid #0d78a0;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 30%;
  height: 30px;
  :hover {
    background-color: red;
  }
`;

export const ButtonEdit = styled.button`
  font-size: 20px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 30%;
  height: 30px;
  :hover {
    background-color: green;
  }
`;
// new

export const EditClientTitle = styled.div`
  border-radius: 15px 15px 0 0;
  display: flex;
  width: 100%;
  height: 4.375rem;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primaryColor};
  margin-bottom: 30px;

  .title-client {
    margin-left: 5%;
    font-size: ${theme.constants.fontHeader};
    color: ${theme.colors.fundamentalColor};
  }
`;

export const InputsEditContainer = styled.div`
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

export const ClientInputs = styled.input`
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
