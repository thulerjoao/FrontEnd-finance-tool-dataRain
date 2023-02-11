import { BsGear } from "react-icons/bs";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const ProfileContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: calc(100vh - 18%);
    padding-right: 3vw;
    box-sizing: border-box;


    .section01{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 40px;
      margin-bottom: 16px;
      padding-right: 2vw;


      h2{
        margin-bottom: 3rem;
        color: ${theme.colors.secundaryColor};
        font-size: ${theme.constants.titleFontSize};
      }

    }

    .section02{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;


      section{
        display: flex;
        flex-direction: row;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 90%;
        height: 40vh;
        border-radius: 12px;
        background-color: ${theme.colors.primaryColor};
        box-shadow: rgb(0 0 0 / 7%) 1px 1px 15px;


        img{
          width: 15rem;
          height: 15rem;
          border-radius: 50%;
          /* margin-left: 10%; */
          box-shadow: rgb(0 0 0 / 50%) 1px 1px 0px;
        }
  
        div{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 50%;
          height: 30%;

          .top{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            h2{
              /* color: ${theme.colors.secundaryColor}; */
              font-size: ${theme.constants.titleFontSize};
              margin-bottom: 2%;
            }
          }


          p{
            font-size: ${theme.constants.smallFont};
          }

          .updateImg{
              margin-top: 3%;
              cursor: pointer;
              width: 45%;
              max-width: 12rem;
              background-color: ${theme.colors.tertiaryColor};
              color: white;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 5px;
              height: 1.5rem;
          }
        }
      }

    }

  `}
`;

export const Gear = styled(BsGear)`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  margin-left: 1rem;
`
