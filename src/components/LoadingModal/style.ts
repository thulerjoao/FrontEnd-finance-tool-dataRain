import styled, { css } from "styled-components";
import { ImSpinner9 } from "react-icons/im"
import theme from "../../styles/theme";


export const LoadingModalContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    /* top: 0;
    left: 0; */
    z-index: 99;
    background-color: black;
    
    div{


        p{
            margin-top: 0.5rem;
            text-align: center;
            width: 100%;
        }
    }
  `}
`;

export const Spin = styled(ImSpinner9) `
    align-items: center;
    width: 5rem;
    animation: rotate 1.5s linear infinite;

    @keyframes rotate {
				from {
					transform: rotate(0deg);
				}

				to {
					transform: rotate(359deg);
				}
			}
`

