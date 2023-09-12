import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Stepper } from '../../components/Stepper';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';

import imageFood from '../../assets/images/food-image/mask-group-6.webp';

import { FiChevronLeft } from 'react-icons/fi';

export const Details = ({ isAdmin = false }) => {
    return (
        <Container>
            <Header></Header>
            <Content>
                <div className="button-text">
                    <FiChevronLeft></FiChevronLeft>
                    <a href="/">voltar</a>
                </div>
                <main>
                    <div className="image-container">
                        <img src={imageFood} alt="Imagem do alimento" />
                    </div>
                    <div className="content">
                        <div className="text-container">
                            <h1>Salada Ravanello</h1>
                            <p>
                                Rabanetes, folhas verdes e molho agridoce
                                salpicados com gergelim.
                            </p>
                        </div>
                        <div className="tags">
                            <Tag title="Alface"></Tag>
                            <Tag title="Cebola"></Tag>
                            <Tag title="Pão"></Tag>
                            <Tag title="Pepino"></Tag>
                            <Tag title="Rabanete"></Tag>
                            <Tag title="Tomate"></Tag>
                        </div>
                        <div className="controllers">
                            {isAdmin ? (
                                <Button title="Editar"></Button>
                            ) : (
                                <>
                                    <Stepper></Stepper>
                                    <Button title="Editar"></Button>
                                </>
                            )}
                        </div>
                    </div>
                </main>
            </Content>
            <Footer></Footer>
        </Container>
    );
};
