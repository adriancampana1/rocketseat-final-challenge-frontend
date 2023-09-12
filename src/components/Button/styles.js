import { styled } from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 12px;
    border-radius: 5px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.SIZE};
    font-weight: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.WEIGHT};
    line-height: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.LINEHEIGHT};

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
`;
