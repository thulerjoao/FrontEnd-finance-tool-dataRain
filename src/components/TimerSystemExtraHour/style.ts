import Calendar from "react-calendar";
import { BsThreeDotsVertical } from "react-icons/bs";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const TimeCardContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: calc(100vh - 18%);
    /* padding-right: 3vw; */
    box-sizing: border-box;


    .section01{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 40px;
      padding-right: 3vw;

      h2{
        margin-bottom: 3rem;
        color: ${theme.colors.secundaryColor};
        font-size: ${theme.constants.titleFontSize};
      }
    }

    

    .section02{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-right: 3vw;
      width: 100%;
      height: 100%;


        .mainCard{
          background-color: ${theme.colors.primaryColor};
          box-shadow: rgb(0 0 0 / 10%) 1px 1px 10px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 3vh 0;
          width: 65%;
          height: 100%;
          position: relative;

          .fisrtSection{
            width: 100%;
            height: 100%;

            .topPart{
            width: 100%;
            height: 2.3vh;
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size: 1.5vh;
            position: relative;

            select{
              cursor: pointer;
              width: 7vw;
              position: absolute;
              left: 3.5%;

              option{
                text-align: center;

              }
            }


            p{
              color: red;
              font-size: 1.5vh;
            }
          }

          .calendar{
            position: absolute;
            width: 20vw;
            left: 1.3vw;
            top: 7vh;
            font-size: 1.5vh;

          }
          }

          .mainSection{
            display: flex;
            height: 100%;
            width: 100%;
            flex-direction: row;

            div{
              width: 50%;
              height: 100%;
              /* border: 1px solid black; */
            }

            .inputDiv{
              display: flex;
              flex-direction: column;
              justify-content: flex-end;

              input{
                width: 80%;
              }
            }
          }

        }

       .buttons{
        width: 85%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 2vh;

        .buttonEnter{
              background-color: ${theme.colors.tertiaryColor};
              height: 5vh;
              width: 44%;
              font-size: ${theme.constants.buttonFontSize};
            }
            .buttonEnter:hover{
              background-color: ${theme.colors.tertiaryColor};
            }
        
        .extra{
          background-color: ${theme.colors.secundaryColor};

        }
        .extra:hover{
          background-color: ${theme.colors.secundaryColor};

        }
       }
      

    }

  `}
`;

export const Settings = styled(BsThreeDotsVertical)`
  height: 5rem;
  cursor: pointer;
`
