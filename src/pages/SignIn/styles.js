import { styled } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    padding: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    gap: 7rem;

    max-width: 70rem;

    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 3.2rem;

        h1 {
            display: none;
        }

        a {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.SIZE};
            font-weight: ${({ theme }) =>
                theme.FONTS.POPPINS_100_MEDIUM.WEIGHT};
            line-height: ${({ theme }) =>
                theme.FONTS.POPPINS_100_MEDIUM.LINEHEIGHT};
        }
    }

    @media (max-width: 550px) {
        padding: 5rem;
    }

    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: max-content;

        form {
            h1 {
                display: block;
            }
            background-color: ${({ theme }) => theme.COLORS.DARK_700};
            padding: 6.4rem;
            border-radius: 16px;
        }
    }
`;
