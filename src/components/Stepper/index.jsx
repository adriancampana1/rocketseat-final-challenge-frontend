import { useState } from 'react';

import { Container } from './styles';

import { FiMinus, FiPlus } from 'react-icons/fi';

export const Stepper = () => {
    const [quantity, setQuantity] = useState('0');

    function handleIncrements() {
        setQuantity(Number(quantity) + 1);
    }

    function handleDecrement() {
        quantity > 0 ? setQuantity(Number(quantity) - 1) : '0';
    }

    return (
        <Container>
            <FiMinus onClick={handleDecrement}></FiMinus>
            <p>{quantity}</p>
            <FiPlus onClick={handleIncrements}></FiPlus>
        </Container>
    );
};
