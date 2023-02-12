import styled,{css} from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import theme from "../../styles/theme";

export const ModalClientContainer = styled.div`
${({theme})=>css`
    width: 35.5rem;
    /* max-width: 54.5rem; */
    height: 95vh;
    max-height: 40rem;
    margin: 0;
    padding: 2rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: column;
    user-select: none;
    z-index: 99;


    div{
        width: 100%;
        height: 1%;
        display: flex;
        display: flex;
        justify-content: flex-start;
        padding: 10px;
    }

    h2{
        font-size: ${theme.constants.titleFontSize};
        color: ${theme.colors.fundamentalColor};
        font-weight: 700;
        height: 20%;
        margin-top: -2rem ;
    }

    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 50%;
        margin-top: -1rem;

        h3{
            color: ${theme.colors.fundamentalColor};
        }

        p{
            text-align:start;
            width: 100%;
            font-size: ${theme.constants.smallFont};
            color: ${theme.colors.fundamentalColor};
            margin-bottom: 0.1rem;
            margin-left: 1rem;
        }

        input{
            display:flex;
            justify-content: flex-start;
            all: unset;
            border: 1px solid #D1D1D1;
            border-radius: 4px;
            font-size: ${theme.constants.smallFont};
            padding: 5px 15px;
            margin-bottom: 0.5rem;
            box-sizing: border-box;
            width: 100%;
            background-color: #F2F4F6;


            ::-webkit-input-placeholder {
            color: ${theme.colors.inputFontColor};
            text-align: start;
        }
        }
    }

    .botton{
        width: 100%;
        justify-content: space-evenly;
        display: flex;
        height: 20%;
        align-items: flex-end;
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