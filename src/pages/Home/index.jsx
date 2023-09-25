import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';
import { Card } from '../../components/Card';

import { api } from '../../services/api';
import { useEffect, useState } from 'react';

import { SwiperSlide } from 'swiper/react';

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [ingredients, setIngredients] = useState();

    useEffect(() => {
        async function fetchProducts() {
            const response = await api.get('/products/?title=&ingredients=');
            console.log(response);
            setProducts(response.data);
        }
        fetchProducts();
    }, []);
    return (
        <Container>
            <Header isAdmin></Header>
            <Content>
                <Banner></Banner>
                <Section title="Refeições">
                    {products
                        .filter((product) => product.category === 'sobremesas')
                        .map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Card
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                        price={item.price}
                                        isAdmin="true"
                                    ></Card>
                                </SwiperSlide>
                            );
                        })}
                </Section>
                <Section title="Pratos Principais">
                    {products
                        .filter((product) => product.category === 'sobremesas')
                        .map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Card
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                        price={item.price}
                                        isAdmin="true"
                                    ></Card>
                                </SwiperSlide>
                            );
                        })}
                </Section>
                <Section title="Sobremesas">
                    {products
                        .filter((product) => product.category === 'sobremesas')
                        .map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Card
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                        price={item.price}
                                        isAdmin="true"
                                    ></Card>
                                </SwiperSlide>
                            );
                        })}
                </Section>
            </Content>
            <Footer></Footer>
        </Container>
    );
};
