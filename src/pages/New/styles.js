import { styled } from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr;
    height: 100vh;
`;

export const Content = styled.div`
    width: 100%;
    padding: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    margin: 0 auto;

    header {
        display: flex;
        align-items: start;
        justify-content: start;
        width: 100%;
        max-width: 70rem;
    }

    .button-text {
        display: flex;
        align-items: center;
        gap: 1rem;
        a,
        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-weight: 500;
            font-size: 2rem;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 68rem;
        gap: 2.4rem;

        h1 {
            font-size: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR.SIZE};
            font-weight: ${({ theme }) =>
                theme.FONTS.POPPINS_300_REGULAR.WEIGHT};
        }

        .input-wrapper,
        .col-2,
        .col-3 {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            label {
                font-family: 'Roboto', sans-serif;
                font-size: ${({ theme }) =>
                    theme.FONTS.ROBOTO_SMALL_REGULAR.SIZE};
                font-weight: ${({ theme }) =>
                    theme.FONTS.ROBOTO_SMALL_REGULAR.WEIGHT};
                color: ${({ theme }) => theme.COLORS.LIGHT_400};
            }
        }

        .col-2,
        .col-3 {
            gap: 2.4rem;
        }

        .col-2 {
            .ingredients {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                padding: 0.3rem;
                height: auto;
                background-color: ${({ theme }) => theme.COLORS.DARK_900};
                border-radius: 8px;
            }
        }

        .added-image {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_700};
            padding: 1rem;
            border-radius: 8px;

            img {
                width: 30%;
            }
        }
    }

    @media (min-width: 650px) {
        padding: 4rem;
    }

    @media (min-width: 900px) {
        padding: 4.8rem;
        gap: 4.8rem;
    }

    @media (min-width: 1100px) {
        padding: 4rem 12.3rem;

        header {
            max-width: none;
        }

        form {
            max-width: none;
            .col-3 {
                display: grid;
                grid-template-columns: auto 50% auto;
                gap: 3.2rem;
            }

            .col-2 {
                display: grid;
                grid-template-columns: 60% auto;
                gap: 3.2rem;
            }

            .button-wrapper {
                display: flex;
                align-items: end;
                justify-content: end;
                button {
                    width: 20%;
                }
            }
        }
    }
`;
