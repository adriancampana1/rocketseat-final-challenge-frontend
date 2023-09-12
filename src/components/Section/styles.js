import { styled } from 'styled-components';

import arrowLeft from '../../assets/icons/arrowLeft.svg';
import arrowRight from '../../assets/icons/arrowRight.svg';

export const Container = styled.div`
    h2 {
        margin-bottom: 2.4rem;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 140%;
    }

    /* .swiper-wrapper {
        filter: brightness(0.5);
    } */

    .swiper-button-next {
        background-image: url(${arrowRight});
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: 100% auto;
        height: 100%;
    }

    .swiper-button-prev {
        background-image: url(${arrowLeft});
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: 100% auto;
        height: 100%;
    }

    .swiper-button-next::after {
        display: none;
    }

    .swiper-button-prev::after {
        display: none;
    }
    @media (min-width: 900px) {
        h2 {
            font-size: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.SIZE};
            font-weight: ${({ theme }) =>
                theme.FONTS.POPPINS_400_MEDIUM.WEIGHT};
            line-height: ${({ theme }) =>
                theme.FONTS.POPPINS_400_MEDIUM.LINEHEIGHT};
        }
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 20%; /* Largura do filtro no início */
    height: 100%;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0)
    ); /* Gradiente de opacidade */
    z-index: 1; /* Coloque o filtro sobre o carrossel */
`;

export const RightOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 20%; /* Largura do filtro no final */
    height: 100%;
    background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0)
    ); /* Gradiente de opacidade */
    z-index: 1; /* Coloque o filtro sobre o carrossel */
`;
