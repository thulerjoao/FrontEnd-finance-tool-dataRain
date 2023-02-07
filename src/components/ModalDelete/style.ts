import styled,{css} from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import theme from "../../styles/theme";

export const AddQuestionContainer = styled.div`
${({theme})=>css`
    width: 30rem;
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

    h2{
        width: 100%;
        text-align: center;
        font-size: ${theme.constants.titleFontSize};
        color: ${theme.colors.fundamentalColor};
        font-weight: 700;
        margin-top: -1rem;
    }

    

       
   section{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;

       .buttonEnter{
             background-color: ${theme.colors.tertiaryColor};
             height: 3rem;
             width: 70%;
             font-size: ${theme.constants.buttonFontSize};
             width: 45%;
           }
           .buttonEnter:hover{
             background-color: ${theme.colors.tertiaryColor};
           }
       .cancel{
           background-color: #0b7ca3;
           }
           .cancel:hover{
             background-color: #0b7ca3;
           }
   }

    

`}
`
export const BackArrow = styled(MdArrowBackIos)`
    height: 1.35rem;
    cursor: pointer;
    color: ${theme.colors.secundaryColor}
`