import styled, { css } from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import theme from "../../styles/theme";

export const ProjectAllContainer = styled.div`
  width: 100%;
  height: 87vh;
  background-color: #f2f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectPageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 90%;
    background-color: ${theme.colors.primaryColor};
    border-radius: 10px;
    position: relative;
  `}
  //scroll
    *::-webkit-scrollbar {
    height: 95%;
    width: 10px;
    border-radius: 20px;
  }

  *::-webkit-scrollbar-track {
    background: #d1d1d1; // cor de fundo do scrol
    border-radius: 20px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ef8e1c; // cor do scroll
    border-radius: 20px;
  }
`;

export const ProjectPageReturn = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left: 3%;
  padding: 10px;
`;

export const BackIcon = styled(IoIosArrowBack)`
  color: #0d78a0;
  height: 2.2rem;
  cursor: pointer;
  font-size: 20px;
`;

export const ProjectPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  height: 20%;
  margin-left: 5%;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      font-size: 20px;
      color: #535353;
      padding: 5px;
      cursor: pointer;
      border: 1px solid #c3c3c3;
      transition: 0.3s ease-in-out;
      border-radius: 8px;
      margin-bottom: 5px;
      :hover {
        border: 1px solid ${theme.colors.tertiaryColor};
        background-color: ${theme.colors.tertiaryColor};
        color: #ffffff;
      }
    }
  }
`;

export const EditIcon = styled(CiSettings)`
  font-size: 26px;
  height: 2.2rem;
  cursor: pointer;
  color: #535353;
`;
export const ProjectHeaderTitle = styled.span`
  width: 80%;
  font-size: 20px;
  color: #0d78a0;
  font-weight: bold;
`;

export const ProjectHeaderSubtitle = styled.span`
  width: 80%;
  font-size: 16px;
  color: #535353;
  margin-top: 10px;
`;

export const ProjectPageContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 5%;
  margin-left: 20px;
  overflow-y: scroll;

  .teste:nth-child(2) {
    background-color: #0d78a0;
    p:first-child {
      background-color: #fff;
      color: #0d78a0;
    }
    p {
      color: #fff;
    }
    span {
      color: #fff;
    }
  }
`;

export const ProjectDescription = styled.p`
  width: 80%;
  font-size: 16px;
  color: #535353;
  margin-top: 10px;
  margin-bottom: 10px;
`;
