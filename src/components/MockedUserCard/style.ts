import styled, { css } from "styled-components";
import { AiOutlineUserAdd } from "react-icons/ai";

export const MockedUserContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    width: 230px;
    height: 280px;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
    cursor: pointer;
  `}
`;

export const MockedUserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

export const MockedUserImage = styled.div`
  border-radius: 50px;
`;

export const UserImage = styled(AiOutlineUserAdd)`
  width: 72px;
  height: 72px;
  color: #000;

`;

export const MockedUserTitle = styled.span`
text-align: center;
  font-size: 26px;
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