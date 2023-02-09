import { BsThreeDotsVertical } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const UsersContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 5rem);
    max-height: calc(100vh - 8.5rem);
    box-sizing: border-box;


    .section01{
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* height: 100%; */
      width: 100%;
      margin-top: 40px;
      margin-bottom: 16px;
      /* p{
      font-size: ${theme.constants.fontHeader};
      } */


      h2{
        margin-bottom: 3rem;
        color: ${theme.colors.secundaryColor};
        font-size: ${theme.constants.titleFontSize};
      }
/* 
      section{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding-right: 2%;
        box-sizing: border-box;
        font-size: 28px;
        
        div{
          width: 100%;
          text-align: center;
        }

      } */

    }

    .section02{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      gap: 2vw;
      padding-right: 2vw;  

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
        
        
        /* margin: 0 auto; */

        div{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 2rem;
          align-items: center;
          margin: 11px;

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
            box-shadow: rgb(0 0 0 / 50%) 1px 2px 0px;

          }

          h2{
            font-size: ${theme.constants.fontBody};
          }

          p{
            font-size: ${theme.constants.buttonFontSize};
          }
        }


      }




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

export const Settings = styled(BsThreeDotsVertical)`
  height: 5rem;
  cursor: pointer;
`
