import styled,{css} from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import theme from "../../styles/theme";
import Calendar from "react-calendar";

export const ModalAksForHourContainer = styled.div`
${({theme})=>css`
    width: 45rem;
    /* max-width: 54.5rem; */
    height: 45rem;
    margin: 0;
    padding: 2.8rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: column;
    user-select: none;
    z-index: 2;


    div{
        width: 100%;
        display: flex;
        display: flex;
        justify-content: flex-start;
        padding: 10px;
    }

    h2{
        font-size: ${theme.constants.titleFontSize};
        color: ${theme.colors.fundamentalColor};
        /* width: 100%; */
        /* text-align: start; */
        font-weight: 700;
        margin-top: -2rem ;
    }

    /* div{
      width: 100%;
      height: 100%; */

      /* .calendar{
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
      }
    } */

    .botton{
        width: 100%;
        justify-content: space-evenly;
        display: flex;
        flex-direction: row;

        .buttonEnter{
              background-color: ${theme.colors.tertiaryColor};
              height: 3rem;
              width: 40%;
              font-size: ${theme.constants.buttonFontSize};
            }
            .buttonEnter:hover{
              background-color: ${theme.colors.tertiaryColor};
            }
    
        .cancel{
                background-color: #0d78a0;
            }
            .cancel:hover{
              background-color: #0d78a0;
            }
    }

`}
`
export const BackArrow = styled(MdArrowBackIos)`
    height: 1.35rem;
    cursor: pointer;
    color: ${theme.colors.secundaryColor}
`

/* export const StyledCalendar = styled(Calendar)`
  display: flex;
  flex-direction: column;
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
`; */