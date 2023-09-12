import { styled } from 'styled-components';

export const Container = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: transparent;
    border: none;

    h2 {
        font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.SIZE};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.WEIGHT};
        line-height: ${({ theme }) =>
            theme.FONTS.POPPINS_100_MEDIUM.LINEHEIGHT};
    }

    h2 {
        display: none;
    }

    svg {
        width: 2.8rem;
        height: 2.4rem;
    }

    p {
        position: absolute;
        top: -5px;
        right: -3px;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
        padding: 4px;
        line-height: 10px;
        font-size: 12px;
        border-radius: 50%;
    }

    h2,
    p,
    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (min-width: 500px) {
        svg {
            width: 3.2rem;
            height: 3rem;
        }
    }

    @media (min-width: 700px) {
        svg {
            width: 4rem;
            height: 3.8rem;
        }
        p {
            font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.SIZE};
        }
    }

    @media (min-width: 900px) {
        gap: 0.5rem;
        padding: 12px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
        width: 100%;
        justify-content: center;

        svg {
            width: 2.8rem;
            height: 2.4rem;
        }
        h2 {
            display: inline-block;
        }
        p {
            position: static;
            background-color: transparent;

            padding: 0;
        }
    }
`;
