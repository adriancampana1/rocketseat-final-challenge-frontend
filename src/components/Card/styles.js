import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    min-height: 22.4rem;
    gap: 1.2rem;
    padding: 2.4rem;
    max-width: 21rem;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

    svg.favorite {
        width: 24px;
        height: 22px;
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;
        cursor: pointer;
    }

    svg.invisible {
        display: none;
    }

    img {
        width: 88px;
        height: 88px;
    }

    h3 {
        font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.SIZE};
        font-weight: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.WEIGHT};
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-align: center;
    }

    span {
        display: none;
    }

    p.price {
        font-family: 'Roboto', sans-serif;
        font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.SIZE};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.WEIGHT};
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    div {
        width: 100%;
        button {
            margin-top: 1.2rem;
            padding: 4px;
        }
    }

    &:hover {
        cursor: pointer;
        transition: all 0.3s;
        transform: scale(1.008);
    }

    @media (min-width: 500px) {
        min-height: 31.4rem;
    }

    @media (min-width: 900px) {
        max-width: 30.4rem;
        height: 47.5rem;
        justify-content: space-between;
        img {
            width: 176px;
            height: 176px;
        }
        svg.favorite {
            width: 24px;
            height: 22px;
            position: absolute;
            top: 1.6rem;
            right: 1.6rem;
            cursor: pointer;
        }
        h3 {
            font-size: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD.SIZE};
            font-weight: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD.WEIGHT};
            gap: 0;
        }
        span {
            display: block;
            text-align: center;
            font-size: ${({ theme }) =>
                theme.FONTS.ROBOTO_SMALLER_REGULAR.SIZE};
            font-weight: ${({ theme }) =>
                theme.FONTS.ROBOTO_SMALLER_REGULAR.WEIGHT};
        }
        div {
            display: flex;
            align-items: center;
            button {
                padding: 12px;
                margin-top: 0;
            }
        }

        p.price {
            font-size: ${({ theme }) =>
                theme.FONTS.ROBOTO_BIGGEST_REGULAR.SIZE};
            font-weight: ${({ theme }) =>
                theme.FONTS.ROBOTO_BIGGEST_REGULAR.WEIGHT};
        }
    }
`;
