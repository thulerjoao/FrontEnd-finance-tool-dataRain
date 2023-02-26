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

          .machine{
            background-color: #e1e1e1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 50%;
            height: 50vh;
            text-align: center;
            padding: 3.5%;
            padding-bottom: 3%;
            border-radius: 15px;
        
            box-shadow: rgb(0 0 0 / 30%) 3px 3px 10px;

            .screen{
              background-color: ${theme.colors.secundaryColor};
              width: 100%;
              height: 12vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
              

              h2{
                width: 13vw;
                text-align: start;
                font-size: 6.5vh;
                color: ${theme.colors.primaryColor};
              }
    
              h3{
                color: ${theme.colors.primaryColor};
                width: 100%;
                font-size: 1.8vh;
                
              }
            }

            .cardSpace{
              display: flex;
              /* flex-direction: column; */
              align-items: center;
              justify-content: center;
              border: 3px solid black;
              border-top: none;
              width: 90%;
              height: 1.7rem;
              border-radius: 0 0 30% 30%;
              box-shadow: inset 0px -8px 5px 5px rgba(0, 0, 0, 0.1);
              position: relative;

              .card{
                background-color: #FEFFCD;
                width: 72%;
                height: 5vh;
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid black;
                position: absolute;
                bottom: 0;

                p{
                  border-bottom: 1px solid ${theme.colors.tertiaryColor};
                  font-size: 1.5vh;
                  width: 90%;
                  height: 50%;
                  text-align: center;
                }
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
