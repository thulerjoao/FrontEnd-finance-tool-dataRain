import { BsThreeDotsVertical } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const UserContainer = styled.div`
  ${({ theme }) => css`
  .card{
        height: 17.5rem;
        width: 15.375rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto;
        margin-bottom: 2%;
        border-radius: 8px;
        box-shadow: rgb(0 0 0 / 10%) 1px 1px 10px;
        background-color: ${theme.colors.primaryColor};
        position: relative;
        
        /* margin: 0 auto; */

        div{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 2rem;
          align-items: center;
          margin: 11px;

          #menuItem{
            background-color: pink;
            width: 5rem;
        }

          p{
            max-width: 80%;
            border-radius: 3px;
            padding: 0.2rem 0.3rem;
            color: ${theme.colors.primaryColor};
            background-color: ${theme.colors.secundaryColor};
            font-size: ${theme.constants.smallFont};
          }
        }

        

        section{
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;

          img{
            border-radius: 50%;
            height: 7rem;
            width: 7rem;
            /* box-shadow: rgb(0 0 0 / 5%) 1px 1px 5px; */

          }

          h2{
            font-size: ${theme.constants.fontBody};
          }

          p{
            font-size: ${theme.constants.buttonFontSize};
          }
        }


      }

      .dropMenu{
        right: 0;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 8.5rem;
        max-height: 30%;
        background-color: white;
        box-shadow: rgb(0 0 0 / 10%) 1px 1px 10px;
        z-index: 1;
        border-radius: 6px;
        margin: .5rem;
        padding: 0;

          div{
            font-size: ${theme.constants.smallFont};
            width: 100%;
            height: 50%;
            padding: 0 17%;
            margin: 0;
          }

          div:hover{
            cursor: pointer;
            background-color: ${theme.colors.tertiaryColor};
            color: ${theme.colors.primaryColor};;
          }

      }


  `}
`;

export const Settings = styled(BsThreeDotsVertical)`
  height: 5rem;
  cursor: pointer;
`
