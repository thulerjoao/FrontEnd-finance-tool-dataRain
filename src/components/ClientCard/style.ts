import styled, { css } from "styled-components";

export const ClientContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    width: 230px;
    height: 280px;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;
    margin-top: 20px;
  `}
`;

export const ClientHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 20px 0;
`;

export const ClientFunction = styled.p`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.secundaryColor};
    color: ${theme.colors.primaryColor};
    border-radius: 5px;
    margin-left: 5px;
    padding: 5px;
  `}
`;

export const ClientImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50px;
`;

export const ClientName = styled.p`
  font-size: 1.2rem;
  color: #000;
  margin-top: 10px;
`;

export const ClientEmail = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: #000;
  margin-top: 15px;
`;

export const ClientPhone = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.1rem;
  color: #000;
  margin-top: 15px;
`;
export const ClientMainContact = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.1rem;
  color: #000;
  margin-top: 15px;
`;
