import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';

export const Home = () => {
    return (
        <Container>
            <Header></Header>
            <Content>
                <Banner></Banner>
                <Section title="Refeições"></Section>
                <Section title="Pratos Principais"></Section>
            </Content>
            <Footer></Footer>
        </Container>
    );
};
