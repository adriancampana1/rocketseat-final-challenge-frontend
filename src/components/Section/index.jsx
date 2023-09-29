import React, { Children } from 'react';

import { Container, Overlay, RightOverlay } from './styles';

import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

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

            const numberOfSlides = React.Children.count(children);

            setOverlayEnabled(numberOfSlides >= 2);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [children]);

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
