import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const ExtraHourContainer = styled.div`
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

      
      
    }

    .section02{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: start;

      section{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 1rem;
        margin-bottom: 2.5rem;
        min-height: 28vh;
        border-radius: 8px;
        padding: 1rem;
        /* background-color: #E4E5E6; */
        background-color: white;

        div{
          display: flex;
          align-items: center;
          flex-direction: row;
          width: 100%;
          justify-content: center;

          p{
            width: 100%;
            text-align: center;
            font-size: ${theme.constants.fontBody};
          }

          h2{
            width: 100%;
            text-align: center;
            margin-top: 0.5%;
          }

          .explanation{
            width: 80%;
            height: 9vh;
            text-align: start;
            background-color: #E4E5E6;
            border-radius: 3px;
            margin-bottom: .5%;
            padding: 0.5rem 2rem;
          }
          
        }
        .botton{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-bottom: 1%;
            

            .buttonEnter{
              background-color: ${theme.colors.tertiaryColor};
              height: 3rem;
              width: 25%;
              margin: 0 3%;
              font-size: ${theme.constants.buttonFontSize};
            }
            .buttonEnter:hover{
              background-color: ${theme.colors.tertiaryColor};
            }

            .reprove{
                background-color: ${theme.colors.secundaryColor};
            }
            .reprove:hover{
              background-color: ${theme.colors.secundaryColor};
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
    }

  `}
`;
