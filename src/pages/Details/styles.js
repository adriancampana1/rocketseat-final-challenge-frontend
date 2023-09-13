import { styled } from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    width: 100%;
`;

export const Content = styled.div`
    width: 100%;
    padding: 3.6rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

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

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        padding: 2.4rem;
        width: 100%;
        max-width: 39rem;
        height: auto;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        text-align: center;

        h1 {
            font-size: 2.7rem;
            line-height: 140%;
        }

        p {
            font-size: 1.6;
            font-weight: 400;
            line-height: 140%;
        }
    }

    .tags {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .controllers {
        margin-top: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        button {
            width: 50%;
        }
    }

    @media (min-width: 650px) {
        padding: 4rem;
    }

    @media (min-width: 900px) {
        padding: 4.8rem;
    }

    @media (min-width: 1100px) {
        padding: 2.4rem 12rem;

        main {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4.7rem;
            margin-top: 4rem;

            .image-container {
                img {
                    padding: 0;
                }
            }

            .content {
                align-items: start;
            }

            .text-container {
                align-items: start;

                h1 {
                    font-size: ${({ theme }) =>
                        theme.FONTS.POPPINS_500_MEDIUM.SIZE};
                    font-weight: ${({ theme }) =>
                        theme.FONTS.POPPINS_500_MEDIUM.WEIGHT};
                    line-height: ${({ theme }) =>
                        theme.FONTS.POPPINS_500_MEDIUM.LINEHEIGHT};
                }

                p {
                    text-align: start;
                    font-size: ${({ theme }) =>
                        theme.FONTS.POPPINS_300_REGULAR.SIZE};
                    font-weight: ${({ theme }) =>
                        theme.FONTS.POPPINS_300_REGULAR.WEIGHT};
                    line-height: ${({ theme }) =>
                        theme.FONTS.POPPINS_300_REGULAR.LINEHEIGHT};
                }
            }

            .controllers {
                width: 100%;
                justify-content: start;
                button {
                    width: 50%;
                }
            }
        }
    }
`;
