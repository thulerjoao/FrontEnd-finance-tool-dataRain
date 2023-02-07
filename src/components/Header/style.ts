import styled, { css } from "styled-components";
import topBar from "../../assets/images/topBar.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsGear } from "react-icons/bs";
import "animate.css";

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    background: url(${topBar});
    background-size: cover;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: 100%;

    section {
      width: 100%;
      max-width: 120rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 4rem;

      div {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        color: ${theme.colors.primaryColor};
        align-items: center;
        width: 50%;
        max-width: 25rem;

        div {
          display: flex;
          flex-direction: row;
          width: 80%;
          max-width: 18.5rem;
        }

        img {
          width: 70px;
          height: 70px;
          border-radius: 50px;
          margin-right: 0.5rem;
        }
        p {
          font-size: ${theme.constants.fontHeader};
        }

        .secondColorElement {
          color: ${theme.colors.tertiaryColor};
        }

        .getOut {
          cursor: pointer;
        }
      }
      .badge {
      }

      input {
        width: 33%;
        height: 2.25rem;
        outline: 0;
        border: none;
        border-radius: 1.125rem;
        text-align: center;
        margin-left: -10%;
        font-size: ${theme.constants.buttonFontSize};
      }

      img {
        height: 4rem;
        filter: drop-shadow(1px 1px 4px #fff);
      }
    }
  `}
`;
export const bell = styled(IoMdNotificationsOutline)`
  height: 2.2rem;
  cursor: pointer;
  margin-left: 1rem;
`;

export const gear = styled(BsGear)`
  height: 1.6rem;
  cursor: pointer;
  margin-left: 1rem;
`;
