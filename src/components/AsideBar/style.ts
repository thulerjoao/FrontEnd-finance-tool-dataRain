import styled, { css } from "styled-components";
import { GrProjects } from "react-icons/gr"
import { ImHourGlass } from "react-icons/im"


export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-attachment: scroll;
  background-color: #f2f4f6;
  height: calc(100vh - 5rem);
  max-height: calc(100vh - 5rem);
  /* position: relative; */          

  
`;

export const ProjectIcon = styled(GrProjects)`

`

export const ExtraHourIcon = styled(ImHourGlass)`

`

export const NavbarWrapper = styled.div`
  display: block;
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  height: 70px;
  margin-right: 1%;
  cursor: pointer;
`;

export const NavbarImg = styled.img`
  height: 221px;
  width: 127px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const NavbarContent = styled.div`
  position: relative;
  /* height: calc(100vh - 70px); */
  padding: 10px 0;
  width: 100%;

`;

export const NavbarContentUl = styled.ul`
  ${({ theme }) => css`
    display: block;
    list-style: none;
    margin-left: 4vw;
    margin-top: 20px;

    .active{
        background-color: ${theme.colors.tertiaryColor};
        color: white;
      }
  `}
`;

export const NavbarContentLi = styled.li`
  ${({ theme }) => css`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    align-items: center;
    cursor: pointer;
    width: 80%;
    height: 50px;
    border-radius: 5px;
    font-size: ${theme.constants.fontBody};
    transition: 0.3s ease-in-out;
    background-color: ${theme.colors.primaryColor};
    box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;

    span {
      margin-left: 20px;
    }

    :hover {
      background-color: ${theme.colors.tertiaryColor};
      color: ${theme.colors.primaryColor};
    }
  `}
`;
