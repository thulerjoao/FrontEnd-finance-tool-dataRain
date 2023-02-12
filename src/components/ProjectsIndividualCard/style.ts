import { BsThreeDotsVertical } from "react-icons/bs";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const ProjectIndividualContainer = styled.div`
  ${({ theme }) => css`
    min-width: 49%;
    position: relative;

  .card{
          min-width: 100%;
          height: 3.5rem;
          margin: .6rem 0;
          padding: 0 2rem;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: ${theme.colors.primaryColor};
          box-shadow: rgb(0 0 0 / 7%) 1px 1px 15px;
          border-radius: 8px;
          cursor: pointer;
        

        
          p{
          margin-left: 2rem;
          }
        
        }

        .card:hover{
          background-color: ${theme.colors.tertiaryColor};
          color: ${theme.colors.primaryColor};
        }

        .dropMenu{
        right: -0.5rem;
        top: 0;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: absolute;
        width: 8.5rem;
        min-height: 4rem;
        background-color: white;
        box-shadow: rgb(0 0 0 / 10%) 1px 1px 10px;
        z-index: 1;
        border: 1px solid #E8E8E9;
        border-radius: 6px;
        /* margin: .5rem; */
        padding: 0;

          div{
            font-size: ${theme.constants.smallFont};
            width: 100%;
            height: 50%;
            padding: 2% 17%;
            margin: 0;
            display: flex;
            justify-content: space-around;
          }

          div:hover{
            cursor: pointer;
            background-color: ${theme.colors.tertiaryColor};
            color: ${theme.colors.primaryColor};;
          }

      }

  `}
`;

export const Settings = styled(BsThreeDotsVertical)`
  padding: 1.1rem;
  height: 3.5rem;
  width: 3.5rem;
  margin-right: -1.5rem;
  cursor: pointer;
`
