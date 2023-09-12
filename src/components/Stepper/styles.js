import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    svg {
        cursor: pointer;
    }

    p,
    svg {
        font-family: 'Roboto', sans-serif;
        font-size: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD.SIZE};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD.WEIGHT};
        line-height: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD.LINEHEIGHT};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    @media (max-width: 500px) {
        p,
        svg {
            font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.SIZE};
            font-weight: ${({ theme }) =>
                theme.FONTS.ROBOTO_SMALL_REGULAR.WEIGHT};
        }
    }
`;
