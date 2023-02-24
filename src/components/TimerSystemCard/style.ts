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
          justify-content: space-around;
          width: 60%;
          height: 70%;


          h2{
            width: 100%;
            text-align: center;
            font-size: 4rem;
            color: ${theme.colors.fundamentalColor};
          }

          h3{
            color: ${theme.colors.fundamentalColor};

          }

          div{

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
