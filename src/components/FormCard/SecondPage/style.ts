import styled,{css} from "styled-components";

export const SecondPageCard = styled.div`
    ${({theme})=>css`
        
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
            height: 75%;

            

            section{
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-direction: column;
                width: 100%;
                height: 80%;

                

                h3{
                    text-align: start;
                    box-sizing: border-box;
                    font-size: ${theme.constants.fontHeader};
                    color: ${theme.colors.fundamentalColor};
                    font-weight: 700;
                    width: 100%;
                    height: 16%;
                }   
                
            
                .FormControl{
                    padding: 0 5%;
                    box-sizing: border-box;
                    height: 41%;
                    width: 100%;
                   

                    overflow-y: scroll;
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
                }

                .questionButtons{
                    width: 100%;
                    height: 10%;
                    padding: 2% 10%;
                    display: flex;
                    justify-content: space-evenly;
                }

                textarea{
                    margin-left: 1px;
                    margin-bottom: 3vh;
                    resize: none;
                    width: 100%;
                    height: 12vh;
                    padding: 5px;
                }


            }
                
                .pageButtons{
                    height: 10%;
                    width: 100%;
                    display: flex;
                    justify-content: space-evenly;
                    box-sizing: border-box;
                    color: white;

                    .buttonBack{
                        background-color: ${theme.colors.backgroundColor};
                        height: 5vh;
                        width: 30%;
                        font-size: ${theme.constants.buttonFontSize};
                        font-weight: 700;
                        color: ${theme.colors.darkGrey};
                        }
                            .buttonBack:hover{
                            background-color: ${theme.colors.backgroundColor};
                    }

                    .buttonNext{
                        background-color: ${theme.colors.tertiaryColor};
                        height: 5vh;
                        width: 30%;
                        font-weight: 700;
                        font-size: ${theme.constants.buttonFontSize};
                        }
                            .buttonNext:hover{
                            background-color: ${theme.colors.tertiaryColor};
                            
                    }
            }
    `}
`