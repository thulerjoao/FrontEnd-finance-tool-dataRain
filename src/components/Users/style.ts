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


export const UserAllContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 120rem;
  height: 100vh;
`;

export const UserNavbar = styled.div`
  width: 25%;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
`;

export const UsersPageContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundColor};
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100vh;
    flex: 1;
    position: relative;
    overflow-x: hidden;
  `}
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

export const UsersPageHeader = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const UsersPageTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secundaryColor};
    font-size: 26px;
    font-weight: 600;
    margin: 50px;
    display: flex;
    height: 10px;
  `}
`;

export const UsersPageContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  margin-left: 50px;
  gap: 5%;
  overflow-y: scroll;
  padding-bottom: 15px;
`;
