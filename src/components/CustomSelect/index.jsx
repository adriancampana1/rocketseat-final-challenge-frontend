import { useState } from 'react';

import { Container } from './styles';
import CreatableSelect from 'react-select';

const options = [
    { value: 'refeicoes', label: 'Refeições' },
    { value: 'sobremesas', label: 'Sobremesas' },
    { value: 'bebidas', label: 'Bebidas' },
];

export const CustomSelect = ({ selectedValueChange }) => {
    const [selected, setSelected] = useState(null);

    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
        selectedValueChange(selectedOption);
    };
    return (
        <Container>
            <CreatableSelect
                options={options}
                isClearable
                className="custom-select"
                classNamePrefix="react-select"
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: 'none',
                        backgroundColor: '#0D1D25',
                        padding: '6px',
                        fontFamily: 'Roboto',
                        fontSize: '14px',
                    }),
                }}
                placeholder="Selecione uma categoria"
                onChange={handleChange}
            />
        </Container>
    );
};
