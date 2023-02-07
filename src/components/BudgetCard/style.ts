import styled, { css } from "styled-components"
import { IoIosArrowBack } from "react-icons/io";


export const BudgetContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 15px;
    width: 55%;
    height: 82.5vh;
    margin-top: 3.5vh;
    background-color: ${theme.colors.primaryColor};
    padding: 1%;
    box-sizing: border-box;

    .mainSection{
        overflow-y: scroll;
        padding: 1%;
    

        width: 100%;
                ::-webkit-scrollbar {
                    width: 10px;
                }
                ::-webkit-scrollbar-track {
                    background: ${theme.colors.inputFontColor};
                    border-radius:5px;
                }
                ::-webkit-scrollbar-thumb {
                    background: ${theme.colors.tertiaryColor};
                    border-radius:5px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #ED8107;
                }

                section{
                    width: 99%;
                    padding: 3% 0;
                }


    }

    .client{
        display: flex;
        width: 100%;
        justify-content: space-around;
        padding-bottom: 1rem;
        border-bottom: 1px solid black;

    }

    .title{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 2% 0;
        padding: 0 1rem;

        div{
            width: 20%;
            text-align: center;
        }

        .fisrth2{
            width: 50%;
        }
        
        
    }

    .summary{
        display: flex;
        justify-content: space-between;
        min-height: 6vh;
        border-bottom: 1px dotted black;
            
        .questions{
            width: 50%;
                margin-left: 2rem;

                p{
                    margin: .8rem 0;
                    margin-left: 1rem;
                }

                div{
                    display: flex;
                }
            
        }

        .hours, .value, .team{
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-left: 1px dotted black;
            justify-content: center;

            .section{
                align-items: center;
            }

            div{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                div{
                    display: flex;
                    flex-direction: column;
                    background-color: black;
                }

                input{
                    border: none;
                    all: unset;
                    width: 3.5rem;
                    text-align: center;
                    border-bottom: 1px solid black;
                }

                .empty{
                    background-color: #F2EDE4;
                }

    
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                input[type=number] {
                    -moz-appearance: textfield;
                }

                p{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 10vh;
                    text-align: start;
                }
            }    
        }

        
    }

        .details{
            margin: 2% 0;
            width: 100%;

            textarea{
                    margin-left: 1px;
                    margin-top: 0.5rem;
                    resize: none;
                    width: 100%;
                    height: 9vh;
                    padding: 5px;
                    background-color: #f2f4f6;
                    border: none;
                }

                .extract{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-evenly;
        }
        }

        .botton{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            

            .buttonEnter{
              background-color: ${theme.colors.tertiaryColor};
              height: 3rem;
              width: 25%;
              margin: 0 3%;
              font-size: ${theme.constants.buttonFontSize};
            }
            .buttonEnter:hover{
              background-color: ${theme.colors.tertiaryColor};
            }

            .save{
                background-color: ${theme.colors.secundaryColor};
            }
            .save:hover{
              background-color: ${theme.colors.secundaryColor};
            }

            .report{
                background-color: ${theme.colors.inputFontColor};
            }
            .report:hover{
              background-color: ${theme.colors.inputFontColor};
            }
        }
    
  `}`;

export const ProjectPageReturn = styled.span`
width: 100%;
display: flex;
justify-content: flex-start;
`;

export const BackIcon = styled(IoIosArrowBack)`
  color: #0d78a0;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: .5rem;
`;
