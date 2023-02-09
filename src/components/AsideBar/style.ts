import styled, { css } from "styled-components";
import { GrProjects } from "react-icons/gr"
import { ImHourGlass } from "react-icons/im"


export const AsidebarContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    background-color: #f2f4f6;
    height: calc(100vh - 5rem);
    max-height: calc(100vh - 5rem); 
    padding-bottom: 2rem;
    /* margin-right: rem; */

    `} 
  
`;

export const ProjectIcon = styled(GrProjects)`

`

export const ExtraHourIcon = styled(ImHourGlass)`

`

export const AsidebarLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  height: 9.2%;
  padding-bottom: 2rem;

  margin-top: 1%;
  cursor: pointer;
`;

export const AsidebarImg = styled.img`
  height: 221px;
  width: 127px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const AsidebarContent = styled.div`
${({ theme }) => css`
  padding: 10px 0;
  box-sizing: border-box;
  background-attachment: scroll;
  width: 100%;
  height: 88%;
  padding-top: 2%;

  
  overflow-y: scroll;
              ::-webkit-scrollbar {
                  width: 10px;
              }
              ::-webkit-scrollbar-track {
                  background: ${theme.colors.inputFontColor};
                  border-radius:5px;
              }
              ::-webkit-scrollbar-thumb {
                  background: ${theme.colors.tertiaryColor};
                  border-radius:5px;
              }
              ::-webkit-scrollbar-thumb:hover {
                  background: #ED8107;
              }
    `} 

`;

export const AsidebarContentUl = styled.ul`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* list-style: none; */
  /* margin-top: 20px; */

    .active{
        background-color: ${theme.colors.tertiaryColor};
        color: white;
      }
  `}
`;

export const AsidebarContentLi = styled.li`
  ${({ theme }) => css`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    cursor: pointer;
    width: 72%;
    height: 3.12rem;
    border-radius: 5px;
    font-size: ${theme.constants.fontBody};
    transition: 0.3s ease-in-out;
    background-color: ${theme.colors.primaryColor};
    box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;

    span {
      margin: 0 20px;
    }

    :hover {
      background-color: ${theme.colors.tertiaryColor};
      color: ${theme.colors.primaryColor};
    }
  `}
`;
