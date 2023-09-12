import { useState, useEffect } from 'react';

import { Container } from './styles';

import foto from '../../assets/images/food-image/bannerimgMobile.png';
import fotoDesk from '../../assets/images/food-image/bannerimgDesk.png';

export const Banner = () => {
    const [imageDesktop, setImageDesktop] = useState(false);

    useEffect(() => {
        function handleImageBanner() {
            if (window.innerWidth >= 600) {
                setImageDesktop(true);
            } else {
                setImageDesktop(false);
            }
        }
        handleImageBanner();

        window.addEventListener('resize', handleImageBanner);

        return () => {
            window.removeEventListener('resize', handleImageBanner);
        };
    }, []);
    return (
        <Container>
            <div className="banner-container">
                <div className="image-container">
                    {imageDesktop ? (
                        <img
                            src={fotoDesk}
                            alt="Imagem de hamburgueres caindo"
                            className="hamburgueres-image"
                        ></img>
                    ) : (
                        <img
                            src={foto}
                            alt="Hamburgueres caindo"
                            className="hamburgueres-image"
                        />
                    )}
                </div>
                <div className="text-container">
                    <h1>Sabores inigualáveis</h1>
                    <p>
                        Sinta o cuidado do preparo com ingredientes
                        selecionados.
                    </p>
                </div>
            </div>
        </Container>
    );
};
