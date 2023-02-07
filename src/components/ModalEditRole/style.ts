import styled from "styled-components";
import theme from "../../styles/theme";

export const FormEdit = styled.form`
  display: flex;
  width: 90%;
  height: 80%;
  flex-direction: column;
  align-items: center;

  .menu-item-billable{
    color: red;
    text-align: center;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
`;

export const LabelEdit = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 100%;
  margin-right: 10px;
`;

export const Select = styled.select`
  width: 70%;
  height: 40px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  outline: none;
  padding: 5px;

  .opition.value {
    background-color: ${theme.colors.tertiaryColor};
    &:hover {
      background-color: ${theme.colors.tertiaryColor};
    }
  }
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
