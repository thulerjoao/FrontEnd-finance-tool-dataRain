import styled,{css} from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import theme from "../../styles/theme";

export const ForgotPasswordContainer = styled.div`
${({theme})=>css`
    max-width: 34.5rem;
    height: 25.5rem;
    margin: 0;
    padding: 2.8rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: column;
    user-select: none;


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
            text-align:center;
            width: 100%;
            font-size: ${theme.constants.smallFont};
            color: ${theme.colors.fundamentalColor};
            margin-bottom: 0.5rem;
        }

        input{
            display:flex;
            justify-content: flex-start;
            all: unset;
            border: 1px solid #D1D1D1;
            border-radius: 4px;
            font-size: ${theme.constants.smallFont};
            padding: 11px 15px;
            box-sizing: border-box;
            width: 100%;


            ::-webkit-input-placeholder {
            color: ${theme.colors.inputFontColor};
            text-align: start;
        }
        }
    }

    .buttonEnter{
          background-color: ${theme.colors.tertiaryColor};
          height: 3rem;
          width: 70%;
          font-size: ${theme.constants.buttonFontSize};
        }
        .buttonEnter:hover{
          background-color: ${theme.colors.tertiaryColor};
        }

`}
`
export const BackArrow = styled(MdArrowBackIos)`
    height: 1.35rem;
    cursor: pointer;
    color: ${theme.colors.secundaryColor}
`