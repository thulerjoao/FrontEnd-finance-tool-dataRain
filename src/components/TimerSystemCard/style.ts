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

          .topPart{
            width: 100%;
            height: 2.3vh;
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size: 1.5vh;
            position: relative;

            select{
              width: 5vw;
              position: absolute;
              left: 3.5%;
            }


            p{
              color: red;
              font-size: 1.5vh;
            }
          }

          .machine{
            background-color: #e1e1e1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            width: 50%;
            height: 48vh;
            text-align: center;
            padding: 3.5%;
            padding-bottom: 3%;
            border-radius: 15px;
            margin-top: -2%;
            box-shadow: rgb(0 0 0 / 30%) 3px 3px 10px;

            .screen{
              padding: 0 2%;
              background-color: ${theme.colors.secundaryColor};
              width: 100%;
              height: 12vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
              

              h2{
                /* font-family: 'Press Start 2P', rubik; */
                width: 14vw;
                text-align: start;
                font-size: 6.5vh;
                color: ${theme.colors.primaryColor};
              }
    
              h3{
                /* font-family: 'Press Start 2P', rubik; */
                color: ${theme.colors.primaryColor};
                width: 100%;
                font-size: 1.8vh;
                
              }
            }

            .cardSpace{
              margin-top: 2vh;
              height: 1rem;
              width: 65%;
              border: 2px solid black;
              border-bottom: none;
              display: flex;
              /* justify-content: center; */
              flex-direction: column;
              align-items: center;

              .card{
                width: 95%;
                min-height: 4.1vh;
                text-align: center;
                background-color: #FEFFCD;
                display: flex;
                justify-content: center;
                align-items: center;

                p{
                  border-bottom: 1px solid ${theme.colors.tertiaryColor};
                  font-size: 1.5vh;
                  width: 90%;
                  /* height: 50%; */
                  text-align: center;
                }
              }

              .title{
                height: auto;
                font-weight: 500;
                height: 100%;

                p{
                  display: flex;
                  flex-wrap: wrap;
                  text-align: center;
                  justify-content: center;
                }
              }

              .lastOne{
                border-bottom: 1px dashed ${theme.colors.tertiaryColor};
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

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  .react-calendar__tile {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    height: 4rem;
    font-size: 1rem;

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
      color: #007bff;
      &:disabled {
        color: #ccc;
      }
      &:hover:enabled {
        background-color: #007bff;
        color: #fff;
      }
    }
  }
`;
