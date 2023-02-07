import styled,{css} from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import theme from "../../../styles/theme";

export const FormModalContainer = styled.div`
${({theme})=>css`
    max-width: 34.5rem;
    height: 20.5rem;
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

    p{
        margin-top: -10%;
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