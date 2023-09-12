import { styled } from 'styled-components';

export const Container = styled.header`
    position: relative;
    .mobile-header {
        display: none;
        align-items: end;
        justify-content: space-between;
        padding: 2rem 4rem;
        height: 114px;
        background-color: ${({ theme }) => theme.COLORS.DARK_600};

        img {
            margin-bottom: -0.5rem;
        }
        button.menu {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            border: none;
            svg {
                width: 2.8rem;
                height: 2.6rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }
        }
    }

    .mobile-header.open {
        display: flex;
    }

    .modal-menu-mobile {
        width: 100vw;
        height: 100vh;
        display: none;
        header {
            display: flex;
            align-items: end;
            justify-content: start;
            padding: 2rem 4rem;
            height: 114px;
            background-color: ${({ theme }) => theme.COLORS.DARK_600};

            button.menu {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: transparent;
                gap: 1.6rem;
                border: none;
                cursor: pointer;
                svg {
                    width: 2.8rem;
                    height: 2.6rem;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
                }

                font-size: 21px;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }
        }

        main {
            padding: 2.8rem;
            display: flex;
            flex-direction: column;
            gap: 4rem;
            background-color: ${({ theme }) => theme.COLORS.DARK_400};
            a {
                font-family: 'Poppins', sans-serif;
                font-size: 24px;
                font-weight: 300;
                padding: 1rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                border-bottom: 0.5px solid
                    ${({ theme }) => theme.COLORS.LIGHT_300};
            }
        }
    }

    .modal-menu-mobile.open {
        display: block;
        height: 100vh;
        position: fixed;
        transition: all 0.5s;
        z-index: 100;

        main {
            height: 100vh;
        }
    }

    .desktop-header {
        display: none;
    }

    @media (min-width: 500px) {
        .mobile-header {
            button.menu {
                svg {
                    width: 3.2rem;
                    height: 3rem;
                }
            }
        }
    }

    @media (min-width: 600px) {
        .mobile-header {
            button.menu {
                svg {
                    width: 3.8rem;
                    height: 3.6rem;
                }
            }
        }
    }

    @media (min-width: 900px) {
        .mobile-header {
            display: none;
        }

        .mobile-header.open {
            display: none;
        }

        .modal-menu-mobile.open {
            display: none;
        }

        .desktop-header {
            background-color: ${({ theme }) => theme.COLORS.DARK_600};
            display: grid;
            align-items: center;
            grid-template-columns: 20% 50% 20% 10%;
            gap: 3rem;
            padding: 2.8rem 8rem;
            height: 104px;

            img {
                margin-bottom: 0rem;
            }

            svg.logout {
                width: 3rem;
                height: 3rem;
            }
        }
    }

    @media (min-width: 1400px) {
        .desktop-header {
            padding: 2.8rem 12rem;
        }
    }
`;
