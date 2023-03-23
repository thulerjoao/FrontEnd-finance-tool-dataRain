import styled,{css} from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import theme from "../../styles/theme";

export const ModalProfileContainer = styled.div`
${({theme})=>css`
    width: 44.5rem;
    max-width: 54.5rem;
    height: 34rem;
    margin: 0;
    padding: 2.8rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: column;


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
        font-weight: 700;
        margin-top: -2rem ;
    }

    section{
        width: 100%;
        margin-top: -1rem;

        p{
            text-align:start;
            width: 100%;
            font-size: ${theme.constants.smallFont};
            color: ${theme.colors.fundamentalColor};
            margin-bottom: 0.5rem;
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


            ::-webkit-input-placeholder {
            color: ${theme.colors.inputFontColor};
            text-align: start;
        }
        }

        .currentPassword{
            border: 1px solid ${theme.colors.tertiaryColor};
        }
    }

    .botton{
        width: 100%;
        justify-content: space-evenly;
        display: flex;

        .buttonEnter{
              background-color: ${theme.colors.tertiaryColor};
              height: 3rem;
              width: 30%;
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