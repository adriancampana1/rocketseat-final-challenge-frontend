import { Container, Overlay, RightOverlay } from './styles';

import { useEffect, useState } from 'react';

import food1 from '../../assets/images/food-image/Mask-group-1_1.webp';
import food2 from '../../assets/images/food-image/Mask-group-2.webp';
import food3 from '../../assets/images/food-image/Mask-group-4_1.webp';
import food4 from '../../assets/images/food-image/mask-group-10.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../Card';

export const Section = ({ title, children }) => {
    const [slidePerView, setSlidePerView] = useState(1.5);
    const [navigationEnabled, setNavigationEnabled] = useState(false);
    const [overlayEnabled, setOverlayEnabled] = useState(false);

    useEffect(() => {
        function handleResize() {
            switch (true) {
                case window.innerWidth > 470 && window.innerWidth < 750:
                    setSlidePerView(2.5);
                    setNavigationEnabled(false);
                    setOverlayEnabled(false);
                    break;
                case window.innerWidth > 750 && window.innerWidth < 900:
                    setSlidePerView(3.5);
                    setNavigationEnabled(false);
                    setOverlayEnabled(false);
                    break;
                case window.innerWidth >= 900 && window.innerWidth < 1100:
                    setSlidePerView(2.4);
                    setNavigationEnabled(true);
                    setOverlayEnabled(true);
                    break;
                case window.innerWidth > 1100 && window.innerWidth < 1300:
                    setSlidePerView(3.2);
                    setNavigationEnabled(true);
                    setOverlayEnabled(true);
                    break;
                case window.innerWidth > 1300:
                    setSlidePerView(4.1);
                    setNavigationEnabled(true);
                    setOverlayEnabled(true);
                    break;
                default:
                    setSlidePerView(1.5);
                    setNavigationEnabled(false);
                    setOverlayEnabled(false);
                    break;
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                slidesPerView={slidePerView}
                spaceBetween={10.6}
                navigation={navigationEnabled}
                style={{ position: 'relative' }}
            >
                {overlayEnabled ? (
                    <>
                        <Overlay></Overlay>
                        <RightOverlay></RightOverlay>
                    </>
                ) : (
                    ''
                )}
                {children}
            </Swiper>
        </Container>
    );
};
