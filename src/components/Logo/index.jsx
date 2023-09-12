import { Container } from './styles';

export const Logo = ({ image, altDescription }) => {
    return (
        <Container>
            <img src={image} alt={altDescription} />
        </Container>
    );
};
