import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 4rem;
    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 3.2rem;
        min-width: 40rem;

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
        form {
            min-width: none;
            width: 100%;
            padding: 0 6.5rem;

            input {
                width: 100%;
            }
        }
    }

    @media (max-width: 400px) {
        gap: 4rem;

        form {
            margin: 0 auto;
            padding: 0 4rem;
        }
    }

    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 111rem;
        margin: 0 auto;
        padding: 4rem;
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
