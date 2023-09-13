import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import { PiReceipt } from 'react-icons/pi';

export const OrderButton = ({ title, quantity, isAdmin = false }) => {
    const navigate = useNavigate();
    return (
        <Container onClick={() => navigate(`/${isAdmin ? 'new' : ''}`)}>
            {isAdmin ? '' : <PiReceipt></PiReceipt>}
            <h2>{title}</h2>
            {quantity ? <p>{quantity}</p> : ''}
        </Container>
    );
};
