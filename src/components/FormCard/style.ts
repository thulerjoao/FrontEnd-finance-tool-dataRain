import styled, { css } from "styled-components";

export const FormCardContainer = styled.div`
    ${({theme})=>css`
        font-size: ${theme.constants.titleFontSize};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vh - 5.3rem);
    `}
`

export const FormCard = styled.div`
    ${({theme})=>css`
        width: 33vw;
        max-width: 33.5rem;
        height: 85vh;
        box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
        padding: 2.8vw;
        margin-top: -1.5vh;
        border-radius: 16px;
        background-color: white;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        h3{
            text-align: start;
            box-sizing: border-box;
            font-size: ${theme.constants.titleFontSize};
            color: ${theme.colors.fundamentalColor};
            font-weight: 700;
        }

        .Stepper{
            width: 100%;
        }
    `}
`