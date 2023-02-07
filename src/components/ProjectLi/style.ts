import styled, { css } from "styled-components";

export const ProjectLi = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    width: 90%;
    height: 50px;
    border-radius: 8px;
    background-color: ${theme.colors.primaryColor};
    font-size: ${theme.constants.fontBody};

    :hover{
      background-color: ${theme.colors.tertiaryColor};
      color: ${theme.colors.primaryColor};
    }
  `}
`;

export const MenuDropdownButton = styled.button`
  background-color: transparent;
  position: relative;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const LiContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span{
    margin-left: 10px;
  }
`;

export const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .span-li{
    width: 90%;
    cursor: pointer;
  }

  .span-dropdown{
    width: 10%;
    cursor: pointer;
  }
`

export const DropdownUl = styled.ul`
  position: fixed;
  right: 20vw;
  display: block;   
  list-style: none;
  width: 150px;
  height: 74px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const DropdownLi = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 45%;

    :hover {
      background-color: ${theme.colors.tertiaryColor};
    }
  `}
`;
