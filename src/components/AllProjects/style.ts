import styled, { css } from "styled-components";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

export const MainSection = styled.div`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.backgroundColor};
  `}`

export const AllContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 100vh;
  display: flex;
`;

export const ProjectNavbar = styled.div`
  width: 25vw;
`;

export const ProjectsContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundColor};
    display: flex;
    flex-direction: column;
    width: 75vw;
    height: 100vh;
    position: relative;
  `}

  *::-webkit-scrollbar {
    height: 95vh;
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

export const ProjectsHeader = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ProjectsTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secundaryColor};
    font-size: 26px;
    font-weight: 600;
    margin: 50px;
    display: flex;
  `}
`;

export const ProjectsContent = styled.div`
  width: 80%;
  height: 80%;
  margin-left: 50px;
  overflow-y: scroll;
`;

export const ProjectsUl = styled.ul`
  list-style: none;
  display: block;
`;

export const NewProject = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 20px;
    width: 90%;
    height: 50px;
    border-radius: 8px;
    background-color: ${theme.colors.primaryColor};
    font-size: ${theme.constants.fontBody};
  `}
`;

export const NewProjectContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

export const AddProjectIcon = styled(AiOutlineUsergroupAdd)`
  width: 2rem;
  height: 2.2rem;
  cursor: pointer;
  margin-right: 15px;
`;
