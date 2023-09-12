import { styled } from 'styled-components';

export const Container = styled.div`
    padding: 4px 8px;
    text-align: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.SIZE};
    font-weight: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.WEIGHT};
    line-height: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.LINEHEIGHT};
`;
