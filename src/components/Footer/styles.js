import { styled } from 'styled-components';

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 3rem;
    height: 77px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    img {
        width: 70%;
    }

    p {
        font-size: 10px;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        text-align: center;
    }

    @media (min-width: 800px) {
        justify-content: space-around;
        p {
            font-size: 12px;
        }

        img {
            width: 100%;
        }
    }

    @media (min-width: 1100px) {
        p {
            font-size: 14px;
        }
    }
`;
