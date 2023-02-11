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
            width: 55%;
            height: 82.5vh;
            margin-top: -3vh;
            padding: 1%;
            display: flex;
            flex-direction: column;
            /* justify-content: space-between; */

            .top{
                height: 25%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                margin-left: 3rem;

                 h2{
                    color: ${theme.colors.secundaryColor};
                    font-size: ${theme.constants.titleFontSize};
                }

                p{
                    color: ${theme.colors.fundamentalColor}
                    font-size: ${theme.constants.fontFamily};
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

                .buttonSave{
                    background-color: ${theme.colors.tertiaryColor};
                    width: 12rem;
                }

                .buttonSave:hover {
                    background-color: ${theme.colors.tertiaryColor};
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
