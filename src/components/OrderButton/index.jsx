import { Container } from './styles';

import { PiReceipt } from 'react-icons/pi';

export const OrderButton = ({ title, quantity, isAdmin = false }) => {
    return (
        <Container>
            {isAdmin ? '' : <PiReceipt></PiReceipt>}
            <h2>{title}</h2>
            {quantity ? <p>{quantity}</p> : ''}
        </Container>
    );
};
