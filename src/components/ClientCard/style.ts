import { BsThreeDotsVertical } from "react-icons/bs";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const ClientContainer = styled.div`
  ${({ theme }) => css`
      width: 22%;
      position: relative;


      .card{
        height: 9rem;
        min-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 2rem;
        margin: 0 auto;
        margin-bottom: 1%;
        border-radius: 8px;
        box-shadow: rgb(0 0 0 / 10%) 1px 1px 10px;
        background-color: ${theme.colors.primaryColor};
        
        
        
        /* margin: 0 auto; */

        div{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 2rem;
          align-items: center;
          margin: 11px;

          h2{
            max-width: 80%;
            border-radius: 3px;
            padding: 0.2rem 0.3rem;
            /* color: ${theme.colors.primaryColor};
            background-color: ${theme.colors.secundaryColor}; */
            font-size: ${theme.constants.smallFont};
          }
        }

        section{
          height: 50%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;

          p{
            font-size: ${theme.constants.buttonFontSize};
          }
        }
      }

      .dropMenu{
        right: 0;
        top: 0;
        margin: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: absolute;
        width: 8.5rem;
        min-height: 4rem;
        background-color: white;
        box-shadow: rgb(0 0 0 / 10%) 1px 1px 10px;
        z-index: 1;
        border: 1px solid #E8E8E9;
        border-radius: 6px;
        /* margin: .5rem; */
        padding: 0;

          div{
            font-size: ${theme.constants.smallFont};
            width: 100%;
            height: 50%;
            padding: 2% 17%;
            margin: 0;
            display: flex;
            justify-content: space-around;
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
