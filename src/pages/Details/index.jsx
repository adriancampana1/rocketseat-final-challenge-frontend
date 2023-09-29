import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Stepper } from '../../components/Stepper';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';

import { FiChevronLeft } from 'react-icons/fi';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export const Details = () => {
    const [data, setData] = useState(null);
    const [image, setImage] = useState('');

    const { isAdmin } = useAuth();

    const navigate = useNavigate();
    const params = useParams();

    function handleBackToHome() {
        navigate('/');
    }

    function handleGoToEdit() {
        navigate(`/edit/${params.id}`);
    }

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await api.get(`products/${params.id}`);
                setData(response.data);

                const imageURL = `${api.defaults.baseURL}/files/${response.data.image}`;
                setImage(imageURL);
            } catch (error) {
                console.log('Erro: ', error);
            }
        }

        fetchProduct();
    }, []);

    return (
        <Container>
            {isAdmin() ? <Header isAdmin></Header> : <Header></Header>}
            {data && (
                <Content>
                    <div className="button-text">
                        <FiChevronLeft></FiChevronLeft>
                        <a onClick={handleBackToHome}>voltar</a>
                    </div>
                    <main>
                        <div className="image-container">
                            <img src={image} alt="Imagem do alimento" />
                        </div>
                        <div className="content">
                            <div className="text-container">
                                <h1>{data.title}</h1>
                                <p>{data.description}</p>
                            </div>
                            <div className="tags">
                                {data.ingredients && (
                                    <>
                                        {data.ingredients.map(
                                            (ingredient, index) => (
                                                <Tag
                                                    title={ingredient.title}
                                                    key={index}
                                                ></Tag>
                                            )
                                        )}
                                    </>
                                )}
                            </div>
                            <div className="controllers">
                                {isAdmin() ? (
                                    <Button
                                        title="Editar"
                                        onClick={handleGoToEdit}
                                    ></Button>
                                ) : (
                                    <>
                                        <Stepper></Stepper>
                                        <Button title="Incluir"></Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </main>
                </Content>
            )}
            <Footer></Footer>
        </Container>
    );
};
