import styled,{css} from "styled-components";

export const ThirdPageCard = styled.div`
    ${({theme})=>css`
        
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
            height: 75%;

            div{
                margin-top: 20%;
                border: 1px solid black;
                border-radius: 15px;
                padding: 35px 35px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                p{
                    font-size: ${theme.constants.fontBody};
                }
            }
            
    `}
`