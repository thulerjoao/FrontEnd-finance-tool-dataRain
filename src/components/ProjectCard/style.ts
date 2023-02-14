import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const ProjectContainer = styled.div`
    ${({theme})=> css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 5rem);
        background-color: #f2f4f6;
        width: 100vw;

        section{
            box-shadow: rgb(0 0 0 / 10%) 1px 1px 10px;
            background-color: ${theme.colors.primaryColor};
            border-radius: 10px;
            width: 65%;
            height: 82.5vh;
            margin-top: -3vh;
            padding: 1%;
            display: flex;
            flex-direction: column;
            /* justify-content: space-between; */

            .header{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                width: 100%;
                justify-content: flex-start;
                align-items: center;
                height: 10vh;
                border-bottom: 1px solid #d1d1d1;
            }

            .top{
                width: 40%;
                height: 25%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                margin-left: 3rem;
                


                 h2{
                    color: ${theme.colors.secundaryColor};
                    font-size: ${theme.constants.fontHeader};
                }

                p{
                    color: ${theme.colors.fundamentalColor}
                    font-size: ${theme.constants.fontFamily};
                    margin: 0.2rem 0;
                }
            }

            .newClient{
                height: 20%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                margin-top: 8%;

                h2{
                    font-size: ${theme.constants.fontHeader};
                    color: ${theme.colors.fundamentalColor}
                }

                select{
                    width: 20rem;
                    height: 2rem;
                }

                select{
                            width: 20rem;
                            height: 3vh;
                            border: none;
                            border-radius: 5px;
                            border: 1px solid #D1D1D1;
                            font-size: ${theme.constants.smallFont};


                            option{
                                width: 100%;
                                text-align: center;
                                font-size: ${theme.constants.smallFont};
                            }

                            }

                .buttonSave{
                    background-color: ${theme.colors.tertiaryColor};
                    width: 12rem;
                }

                .buttonSave:hover {
                    background-color: ${theme.colors.tertiaryColor};
                }
            }

            .bottom{
                /* border: 1px solid #eff1f3; */
                /* box-shadow: rgb(0 0 0 / 10%) 1px 1px 10px; */
                width: 100%;
                height: 64vh;
                /* border-radius: 8px; */
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                margin-top: 1%;

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

                    .card{
                        /* margin: 0 auto; */
                        margin: 1% 2.4%;
                        width: 20%;
                        height: 30vh;
                        border: 1px solid #55555530;
                        /* box-shadow: rgb(0 0 0 / 50%) 1px 1px 10px; */
                        box-shadow: rgb(0 0 0 / 10%) 1px 1px 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        background-color: #f8fafb;
                        border-radius: 8px;
                        padding: 1%;
                        

                        img{
                            height: 12vh;
                            /* border-radius: 50%; */
                        }

                        p{
                            font-size: ${theme.constants.smallFont};
                            text-align: center;
                        }

                        select{
                            width: 17vh;
                            height: 3vh;
                            border: none;
                            border-radius: 5px;
                            border: 1px solid #D1D1D1;
                            font-size: ${theme.constants.buttonFontSize};


                            option{
                                width: 100%;
                                text-align: center;
                                font-size: ${theme.constants.buttonFontSize};
                            }

                            }

                        .registe{
                            background-color: ${theme.colors.tertiaryColor};
                            height: 4vh;
                            width: 15vh;
                            margin: 0 3%;
                            font-size: ${theme.constants.buttonFontSize};
                        }
                        .registe:hover{
                            background-color: ${theme.colors.tertiaryColor};
                        }
                    }

                    .newUser{
                        border: 1px dashed #55555580;
                        padding-top: 6vh;
                        padding-bottom: 5.5vh;
                        box-sizing: border-box;
                        cursor: pointer;

                    }

                    .oldUser{

                        div{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            width: 100%;
                            height: 15%;
                            text-align: center;
                            margin-top: -5%;

                            p{
                                max-width: 85%;
                                background-color: ${theme.colors.secundaryColor};
                                color: ${theme.colors.fundamentalColor};
                                color: ${theme.colors.primaryColor};
                                padding: 0 1%;
                                border-radius: 3px;

                                
                            }

                            .manager{
                                background-color: ${theme.colors.tertiaryColor};;
                            }
                            
                            
                        }

                        img{
                                border-radius: 50%;
                                height: 40%;
                            }

                        h3{
                            color: ${theme.colors.secundaryColor};
                            font-size: ${theme.constants.fontBody};
                            margin-bottom: 5%;
                        }

                        p{
                            color: ${theme.colors.fundamentalColor};
                            font-size: ${theme.constants.buttonFontSize};
                            text-align: center;
                            
                        }

                        .bottomInfo{
                            margin-top: -5%;
                        }
                    }
            }

        }
    `}
`

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

export const trash = styled(FaRegTrashAlt)`
  min-height: 100%;
  min-width: 8%;
  cursor: pointer;
  color: ${theme.colors.fundamentalColor};
`
