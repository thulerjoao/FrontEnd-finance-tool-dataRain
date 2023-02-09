import styled, { css } from "styled-components";

export const QuestionsContainer = styled.div`
    padding: 0;
    margin: 0;
    user-select: none;
    background-color: #f2f4f6;
    /* display: flex;
    justify-content: center; */

    .mainSection{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .mainDiv{
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: 120rem;

        .AsideBar{
            display: flex;
            justify-content: flex-end;
            width: 25%;
            height: calc(100vh - 5rem);
        }

        .HomeCard{
            display: flex;
            justify-content: flex-start;
            width: 75%;
            height: calc(100vh - 5rem);
            padding-left: 10px;
            margin-right: 5%;
        }
    }
`