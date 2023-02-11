import styled from "styled-components";

export const FormUpload = styled.form`
  display: flex;
  width: 90%;
  height: 50%;
  flex-direction: column;
  align-items: center;

  .buttonCancel:hover{
    background-color: #f2f4f6;
    color: #9faec0
  }

  .buttonSave:hover{
    background-color: #ef8e1c;
  }
`;

export const LabelUpload = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 100%;
  margin-right: 10px;
`;

export const InputUpload = styled.input`
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
`;
