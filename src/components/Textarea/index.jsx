import { useState } from 'react';

import { Container } from './styles';

export const Textarea = ({ children, onTextareaChange }) => {
    const [textareaValue, setTextareaValue] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setTextareaValue(value);
        onTextareaChange(value);
    };

    return (
        <Container
            placeholder="Insira uma descrição"
            onChange={handleChange}
            value={textareaValue}
        >
            {children}
        </Container>
    );
};
