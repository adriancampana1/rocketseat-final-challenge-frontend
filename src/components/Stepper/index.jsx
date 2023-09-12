import { useState } from 'react';

import { Container } from './styles';

import { FiMinus, FiPlus } from 'react-icons/fi';

export const Stepper = () => {
    const [quantity, setQuantity] = useState('1');

    function handleIncrements() {
        setQuantity(Number(quantity) + 1);
    }

    function handleDecrement() {
        quantity > 1 ? setQuantity(Number(quantity) - 1) : '1';
    }

    return (
        <Container>
            <FiMinus onClick={handleDecrement}></FiMinus>
            <p>{quantity}</p>
            <FiPlus onClick={handleIncrements}></FiPlus>
        </Container>
    );
};
