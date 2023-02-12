import styled,{css} from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import theme from "../../styles/theme";

export const ModalUserContainer = styled.div`
${({theme})=>css`
    width: 35.5rem;
    /* max-width: 54.5rem; */
    height: 30rem;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 30%;
        margin-top: -1rem;

        h3{
            color: ${theme.colors.fundamentalColor};
        }

        p{
            text-align:start;
            width: 80%;
            font-size: ${theme.constants.smallFont};
            color: ${theme.colors.fundamentalColor};
            margin-bottom: 0.5rem;
            margin-top: 1rem;
            margin-left: 2rem;
        }
        
        select{
            width: 80%;
            height: 3rem;

            option{
                text-align: center;
                height: 2rem;
            }
        }
    }

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