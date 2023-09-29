import { Container } from './styles';

import { useNavigate } from 'react-router-dom';

export const Logo = ({ image, altDescription }) => {
    const navigate = useNavigate();

    function handleBackHome() {
        navigate('/');
    }
    return (
        <Container style={{ cursor: 'pointer' }} onClick={handleBackHome}>
            <img src={image} alt={altDescription} />
        </Container>
    );
};
