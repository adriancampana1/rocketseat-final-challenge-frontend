import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 3.8rem;
    .banner-container {
        display: flex;
        align-items: start;
        justify-content: start;
        background-color: ${({ theme }) => theme.COLORS.GRADIENTS_200};
        border-radius: 8px;
        position: relative;
        height: 100%;
        min-height: 14rem;
    }

    .image-container {
        flex: 1;
        position: relative;
    }

    .hamburgueres-image {
        min-width: 19.1rem;
        min-height: 14.9rem;

        position: absolute;
        top: -0.9rem;
        left: -2.3rem;
    }

    .text-container {
        flex: 1;
        padding: 1rem;
        margin-left: 2rem;
        text-align: start;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    h1 {
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 140%;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 0.9rem;
        font-weight: 300;
        line-height: 140%;
    }

    @media (min-width: 460px) {
        .banner-container {
            min-height: 14.1rem;
        }
        .hamburgueres-image {
            left: 15%;
        }

        .text-container {
            padding: 1.2rem;
        }

        h1 {
            font-size: 1.8rem;
        }

        p {
            font-size: 1.1rem;
        }
    }

    @media (min-width: 600px) {
        h1 {
            font-size: 2.1rem;
        }

        p {
            font-size: 1.4rem;
        }
        .banner-container {
            min-height: 19.8rem;
        }
        .hamburgueres-image {
            width: 34rem;
            height: auto;
            left: -10%;
        }
    }

    @media (min-width: 900px) {
        .banner-container {
            min-height: 23rem;
        }
        .hamburgueres-image {
            width: 45rem;
            height: auto;
            top: -4.3rem;
            left: -3rem;
        }

        .text-container {
            padding: 1.6rem;
        }

        h1 {
            font-size: 2.4rem;
        }

        p {
            font-size: 1.6rem;
        }
    }

    @media (min-width: 1100px) {
        .banner-container {
            min-height: 27rem;
        }
        .hamburgueres-image {
            width: 62rem;
            height: auto;
            top: -10.7rem;
            left: -12rem;
        }

        .text-container {
            padding: 2.1rem;

            h1 {
                font-size: ${({ theme }) =>
                    theme.FONTS.POPPINS_500_MEDIUM.SIZE};
                font-weight: ${({ theme }) =>
                    theme.FONTS.POPPINS_500_MEDIUM.WEIGHT};
                line-height: ${({ theme }) =>
                    theme.FONTS.POPPINS_500_MEDIUM.LINEHEIGHT};
            }

            p {
                font-size: ${({ theme }) =>
                    theme.FONTS.ROBOTO_SMALL_REGULAR.SIZE};
                font-weight: ${({ theme }) =>
                    theme.FONTS.ROBOTO_SMALL_REGULAR.WEIGHT};
                line-height: ${({ theme }) =>
                    theme.FONTS.ROBOTO_SMALL_REGULAR.LINEHEIGHT};
            }
        }
    }

    @media (min-width: 1200px) {
        .hamburgueres-image {
            width: 65.6rem;
            height: auto;
            top: -12.7rem;
            left: -1rem;
        }

        .text-container {
            margin-left: 0;
        }
    }
`;
