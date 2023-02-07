import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsFolderPlus } from "react-icons/bs";

export const QuestionsContainer = styled.div`
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
      cursor: pointer;
      width: 18%;
    }


      h2{
        margin-bottom: 3rem;
        color: ${theme.colors.secundaryColor};
        font-size: ${theme.constants.titleFontSize};
      }

      div{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding: 0 7% 0 4.5%;
        box-sizing: border-box;
        font-size: 28px;

        .company{
          margin-left: 10%;
        }

        .last{
          margin-right: 5%;
        }

        .date{
          margin-left: 6%;
        }

      }

    }

    .allQuestions{
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

    .newQuestion{
      background-color: #CCDFED60;
    }

    .section02{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 5px;
      padding: 4rem 0;
      border-bottom: 1px solid ${theme.colors.inputFontColor};
      border-top: 1px solid ${theme.colors.inputFontColor};
      
      p{
      font-size: ${theme.constants.fontBody};
      }

      .title{
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-right: 84px;
        padding-left: 2rem;

        div{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 20%;
        }
        
        p{
          font-size: ${theme.constants.fontHeader};
        }

        .updateButton{
          background-color: ${theme.colors.tertiaryColor};
          color: ${theme.colors.primaryColor};
          padding: 0.2rem 0.5rem;
          border-radius: 5px;
          cursor: pointer;
          width: 45%;
          text-align: center;
        }

        .delete{
          background-color: #0b7ca3;
        }
      }

      section{
        width: 100%;
        padding: 0 70px;

        .newAlternative{
              margin-top: 1.5%;
              cursor: pointer;
              width: 14%;
              background-color: ${theme.colors.tertiaryColor};
              color: white;
              height: 1.5rem;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 5px;
            }

          .finish{
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            margin-top: 2%;
            margin-bottom: -2%;

            .cancel{
              background-color: #0b7ca3;
              margin-left: 1rem;
            }

            p{
              height: 2.5rem;
            }
           
          }


        .firstInput{
          width: 100%;
          height: 40px;
          border: none;
          margin: 22px 0;
          border-radius: 5px;
          padding-left: 19px;
          font-size: ${theme.constants.fontBody};

        }

        .cards{
          display: flex;
          justify-content: space-between;

          div{
            display: flex;
            flex-direction: column;
            
            input{
              height: 40px;
              border: none;
              margin-top: 13px;
              border-radius: 5px;
              padding-left: 19px;
            font-size: ${theme.constants.fontBody};

            }
          }

          .first{
            width: 50%;
            margin-right: 2%;

            .newAnswer{
              background-color: #d2d2d290;
            }
            
          }

          .second{
            width: 30%;
            margin-right: 2%;

            .newTeam{
              background-color: #d2d2d290;
            }

            select{
              height: 40px;
              border: none;
              margin-top: 13px;
              border-radius: 5px;

              option{
                width: 100%;
                text-align: center;
                font-size: ${theme.constants.fontBody};

              }

            }
            
          }

          .third{
            width: 20%;

            section{
              display: flex;
              flex-direction: row;
              padding: 0;

              div{
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }

            .newHour{
              background-color: #d2d2d290;
            }

            input{
              text-align: center;
            }

            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            /* Firefox */
            input[type=number] {
              -moz-appearance: textfield;
}

        }
      }
    }

  `}
`;

export const trash = styled(FaRegTrashAlt)`
margin-top: 50%;
  height: 2rem;
  cursor: pointer;
  margin-left: 1rem;
`

export const plus = styled(BsFolderPlus)`
margin-top: 50%;
cursor: pointer;
margin-left: 1rem;
`
