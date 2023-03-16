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

            .extraAlert{
              max-width: 17vw;
              text-align: center;
              margin-top: -0.2rem;
            }

            select{
              cursor: pointer;
              width: 10vw;
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
          
            .statusSection{
              width: 50%;
              height: 45vh;
              position: absolute;
              top: 11%;
              right: 0.6vw;
              border-left: 1px dotted black;
              padding-left: 2%;

              section{
                width: 100%;
                height: 43vh;
                padding-right: 3%;
                
                div{
                  min-height: 6vh;
                  margin-top: 4%;
                  background-color: ${theme.colors.backgroundColor};
                  padding: 1% 3%;
                  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  
                  p{
                    width: 100%;
                    text-align: center;
                    font-size: 1.8vh;
                  }

                 
                  .description{
                    margin-top: 0.5%;
                    font-size: 1.5vh;
                    /* background-color: #fff; */
                  }
  
                  .approved{
                    background-color: #3FFF0030;
                  }
  
                  .reproved{
                    background-color: #FF000030
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

            }

          .askForTime{
            padding-top: 1vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 50%;
            height: 100%;
            font-size: 1.5vh;

            .calendar{
              width: 18.2vw;

              .react-calendar__tile {
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 4px;
                padding: 0.5rem;
                font-size: 1.5vh;

                &:hover {
                  background-color: #eee;
                }

                &--active,
                &--active:hover {
                  background-color: #007bff;
                  color: #fff;
                }
              }

              .react-calendar__navigation {
                margin-bottom: 1rem;
                button {
                  color: ${theme.colors.tertiaryColor};
                  background-color: #eee;
                  &:disabled {
                    color: #ccc;
                  }
                  &:hover:enabled {
                    background-color: ${theme.colors.tertiaryColor};
                    color: #fff;
                  }
                }
              }

            }

            textarea{
                    padding-top: 1vh;
                    resize: none;
                    width: 18.2vw;
                    height: 6.5vh;
                    padding: 5px;
                    font-size: 1.5vh;
                }
            
            .buttonLaunch{
              background-color: ${theme.colors.tertiaryColor};
              height: 4vh;
              width: 50%;
              font-size: 1.5vh;
              margin-bottom: 3vh;
            }
              .buttonLaunch:hover{
                background-color: ${theme.colors.tertiaryColor};
              }

          }
          }

          .mainSection{
            display: flex;
            height: 100%;
            width: 100%;
            flex-direction: row;
            /* position: relative; */

            div{
              width: 50%;
              height: 100%;
              /* border: 1px solid black; */
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
