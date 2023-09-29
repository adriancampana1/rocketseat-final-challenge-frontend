import { useEffect, useState } from 'react';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';
import { Card } from '../../components/Card';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { SwiperSlide } from 'swiper/react';

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    const { isAdmin } = useAuth();

    const handleFormatPrice = (value) => {
        const numericalValue = value.replace(/[^0-9,.]/g, '');

        const hasDecimalPlaces = numericalValue.includes(',');

        const formattedNumber = hasDecimalPlaces
            ? `R$ ${numericalValue}`
            : `R$ ${parseFloat(numericalValue).toLocaleString('pt-BR', {
                  style: 'decimal',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
              })}`;

        return formattedNumber;
    };

    const handleSearchValue = (value) => {
        setSearch(value);
    };

    const categoryRefeicoes = products.filter(
        (product) => product.category === 'refeicoes'
    );
    const categorySobremesas = products.filter(
        (product) => product.category === 'sobremesas'
    );
    const categoryBebidas = products.filter(
        (product) => product.category === 'bebidas'
    );

    useEffect(() => {
        async function fetchProducts() {
            const response = await api.get(
                `/products/?search=${encodeURIComponent(search)}`
            );

            setProducts(response.data);
        }
        fetchProducts();
    }, [search]);
    return (
        <Container>
            {isAdmin() ? (
                <Header
                    isAdmin
                    onSearchValueChange={handleSearchValue}
                ></Header>
            ) : (
                <Header onSearchValueChange={handleSearchValue}></Header>
            )}
            <Content>
                <Banner></Banner>
                {categoryRefeicoes.length > 0 && (
                    <Section title="Refeições">
                        {products
                            .filter(
                                (product) => product.category === 'refeicoes'
                            )
                            .map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        {isAdmin() ? (
                                            <Card
                                                title={item.title}
                                                description={item.description}
                                                image={item.image}
                                                price={handleFormatPrice(
                                                    item.price
                                                )}
                                                id={item.id}
                                                isAdmin
                                            ></Card>
                                        ) : (
                                            <Card
                                                title={item.title}
                                                description={item.description}
                                                image={item.image}
                                                price={handleFormatPrice(
                                                    item.price
                                                )}
                                                id={item.id}
                                            ></Card>
                                        )}
                                    </SwiperSlide>
                                );
                            })}
                    </Section>
                )}
                {categorySobremesas.length > 0 && (
                    <Section title="Sobremesas">
                        {products
                            .filter(
                                (product) => product.category === 'sobremesas'
                            )
                            .map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        {isAdmin() ? (
                                            <Card
                                                title={item.title}
                                                description={item.description}
                                                image={item.image}
                                                price={handleFormatPrice(
                                                    item.price
                                                )}
                                                id={item.id}
                                                isAdmin
                                            ></Card>
                                        ) : (
                                            <Card
                                                title={item.title}
                                                description={item.description}
                                                image={item.image}
                                                price={handleFormatPrice(
                                                    item.price
                                                )}
                                                id={item.id}
                                            ></Card>
                                        )}
                                    </SwiperSlide>
                                );
                            })}
                    </Section>
                )}
                {categoryBebidas.length > 0 && (
                    <Section title="Bebidas">
                        {products
                            .filter((product) => product.category === 'bebidas')
                            .map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        {isAdmin() ? (
                                            <Card
                                                title={item.title}
                                                description={item.description}
                                                image={item.image}
                                                price={handleFormatPrice(
                                                    item.price
                                                )}
                                                id={item.id}
                                                isAdmin
                                            ></Card>
                                        ) : (
                                            <Card
                                                title={item.title}
                                                description={item.description}
                                                image={item.image}
                                                price={handleFormatPrice(
                                                    item.price
                                                )}
                                                id={item.id}
                                            ></Card>
                                        )}
                                    </SwiperSlide>
                                );
                            })}
                    </Section>
                )}
            </Content>
            <Footer></Footer>
        </Container>
    );
};
