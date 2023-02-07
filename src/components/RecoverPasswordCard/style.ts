import styled,{css} from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import theme from "../../styles/theme";

export const RecoverPasswordContainer = styled.div`
${({theme})=>css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 5.3rem);
`}
`

export const RecoverPasswordCard = styled.div`
${({theme})=>css`
    max-width: 38.5rem;
    height: 25.5rem;
    margin: 0;
    margin-top: -2.5rem;
    padding: 3.5rem;
    box-sizing: border-box;
    background-color: white;
    box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
    border-radius: 15px;
    display: flex;
    justify-content:space-between;
    align-items: flex-start;
    flex-direction: column;
    user-select: none;

    h2{
      font-size: ${theme.constants.titleFontSize};
      color: ${theme.colors.fundamentalColor};
      font-weight: 700;
      margin-bottom: 5%;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;

        p{
          font-size: ${theme.constants.smallFont};
          color: ${theme.colors.fundamentalColor};
          margin-left: 0.5rem;
        }

        input{
            all: unset;
            border: 1px solid #D1D1D1;
            border-radius: 4px;
            font-size: ${theme.constants.smallFont};
            padding: 11px 9px;
            box-sizing: border-box;
    
            ::-webkit-input-placeholder {
              color: ${theme.colors.inputFontColor};
            }
        }
    }

    section{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 5%;

      .buttonEnter{
            background-color: ${theme.colors.tertiaryColor};
            height: 3rem;
            width: 70%;
            font-size: ${theme.constants.buttonFontSize};
          }
          .buttonEnter:hover{
            background-color: ${theme.colors.tertiaryColor};
          }
    }
    


`}
`
export const BackArrow = styled(MdArrowBackIos)`
    height: 1.35rem;
    cursor: pointer;
    color: ${theme.colors.secundaryColor}
`