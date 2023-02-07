import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const HomeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 10rem);
    padding-right: 7rem;
    box-sizing: border-box;


    .section01{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 40px;
      margin-bottom: 16px;
      p{
      font-size: ${theme.constants.fontHeader};
      }


      h2{
        margin-bottom: 3rem;
        color: ${theme.colors.secundaryColor};
        font-size: ${theme.constants.titleFontSize};
      }

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

      }

    }

    .section02{
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      width: 100%;
      height: 100%;

      p{
      font-size: ${theme.constants.fontBody};
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      }

      div{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .request{
        background-color: #ff0000;
        color: white;
        height: 2rem;
        width: 12rem;
        border-radius: 5px;
      }

      .review{
        background-color: #ef8e1c;
        color: white;
        height: 2rem;
        width: 12rem;
        border-radius: 5px;

      }
      
      .approved{
        background-color: #50bf16;
        color: white;
        height: 2rem;
        width: 12rem;
        border-radius: 5px;
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

      section{
        display: flex;
        flex-direction: row;
        width: 99%;
        justify-content: space-between;
        background-color: ${theme.colors.primaryColor};
        min-height: 5rem;
        margin-bottom: 16px;
        align-items: center;
        /* padding: 0 36px; */
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
        cursor: pointer;

        div{
          width: 100%;
          text-align: center;
        }

      }

      section:hover{
        background-color: ${theme.colors.tertiaryColor};
        color: ${theme.colors.primaryColor};
      }
    }

  `}
`;
