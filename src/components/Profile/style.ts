import { AiOutlineSetting } from "react-icons/ai";
import styled, { css } from "styled-components";

export const MainSection = styled.div`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.backgroundColor};
  `}`

export const ALlProfilePageContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 100vh;
  display: flex;
`;

export const ProfileNavbar = styled.div`
  width: 25%;
`;

export const ProfilePageContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundColor};
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100vh;
    position: relative;
    padding-left: 10px;
  `}
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ProfileTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secundaryColor};
    font-size: 26px;
    font-weight: 600;
    margin: 50px;
    display: flex;
  `}
`;

export const ProfileContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    width: 80%;
    height: 80%;
    border-radius: 10px;
    margin-bottom: 50px;
  `}
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export const ProfileCardImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50px;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: #c3c3c3;
`;
export const ProfileCardName = styled.p`
  font-size: 2rem;
  color: #000;
  margin-bottom: 20px;
`;
export const ProfileCardEmail = styled.p`
  font-size: 1rem;
  color: #000;
  margin-bottom: 20px;
`;
export const ProfileCardPosition = styled.p`
  font-size: 1rem;
  color: #000;
  margin-bottom: 20px;
`;
export const ProfileCardRole = styled.p`
  font-size: 1rem;
  color: #000;
  margin-bottom: 20px;
`;

export const ProfileSettings = styled(AiOutlineSetting)`
  ${({ theme }) => css`
    width: 1.5rem;
    height: 4.2rem;
    cursor: pointer;
    margin-left: 1rem;
    color: ${theme.colors.secundaryColor};
  `}
`;
export const DivUpload = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const UploadImgButton = styled.button`
  ${({ theme }) => css`
  width: 92px;
  height: 52px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  margin: 10px;
  background-color: ${theme.colors.secundaryColor};
  color: ${theme.colors.tertiaryColor};
  transition: 0.3s ease-in-out;
  &:hover{
    background-color: ${theme.colors.tertiaryColor};
    color: ${theme.colors.secundaryColor}
  }
  `}
`;
