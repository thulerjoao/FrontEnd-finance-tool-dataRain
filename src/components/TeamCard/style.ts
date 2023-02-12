import { BsThreeDotsVertical } from "react-icons/bs";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const TeamContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: calc(100vh - 18%);
    box-sizing: border-box;
    position: relative;

    .section02{
      /* display: flex;
      flex-direction: column;
      padding-right: 3vw;
      width: 100%;
      height: 100%;

      
      .registerTeam{
        min-height: 13rem;
        background-color: #e4ecf2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2% 8%;
        box-sizing: border-box;
        border-top: 1px solid ${theme.colors.inputFontColor};
        border-bottom: 1px solid ${theme.colors.inputFontColor};
        margin-bottom: .3rem;
        


        div{
          display: flex;
          width: 100%;
          justify-content: space-between;

          p{
            width: 48%;
            margin-left: 30px;

          }

          input{
            width: 48%;
            height: 40px;
            border: none;
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: 20px;
            border-radius: 5px;
            padding-left: 19px;
            font-size: ${theme.constants.fontBody};
          }
        }

        .confirmNewTeam{
              margin-top: 1.5%;
              cursor: pointer;
              width: 25%;
              max-width: 12rem;
              background-color: ${theme.colors.tertiaryColor};
              color: white;
              height: 1.5rem;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 5px;
        }
      } */


      .card{
        width: 100%;
        height: 3.5rem;
        margin: .6rem 0;
        padding: 0 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: ${theme.colors.primaryColor};
        box-shadow: rgb(0 0 0 / 7%) 1px 1px 15px;
        border-radius: 8px;
        


        p{
          width: 50%;
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

    .dropMenu{
        right: -0.5rem;
        top: 0;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: absolute;
        width: 8.5rem;
        min-height: 3.8rem;
        background-color: white;
        box-shadow: rgb(0 0 0 / 10%) 1px 1px 10px;
        z-index: 1;
        border-radius: 6px;
        border: 1px solid #E8E8E9;
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
