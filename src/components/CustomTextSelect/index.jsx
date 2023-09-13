import { useState } from 'react';
import { Container } from './styles';
import CreatableSelect from 'react-select';

const components = {
    DropdownIndicator: null,
};

const createOption = (label) => ({
    label,
    value: label,
});

export const CustomTextSelect = () => {
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([]);

    const handleKeyDown = (event) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };

    return (
        <CreatableSelect
            components={components}
            inputValue={inputValue}
            isClearable
            isMulti
            menuIsOpen={false}
            onChange={(newValue) => setValue(newValue)}
            onInputChange={(newValue) => setInputValue(newValue)}
            onKeyDown={handleKeyDown}
            placeholder="Digite e pressione enter"
            value={value}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    border: 'none',
                    backgroundColor: '#0D1D25',
                    fontFamily: 'Roboto',
                    fontSize: '14px',
                    padding: '16px',
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                }),
                multiValue: () => ({
                    backgroundColor: 'transparent',
                    display: 'flex',
                }),
                multiValueLabel: () => ({
                    color: '#C4C4CC',
                    backgroundColor: '#00111A',
                    padding: '1rem',
                    borderRadius: '10px 0 0 10px',
                }),
                multiValueRemove: () => ({
                    color: '#92000E',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#00111A',
                    padding: '4px',
                    borderRadius: '0 10px 10px 0',
                }),
                valueContainer: () => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }),
                input: () => ({
                    color: '#C4C4CC',
                }),
            }}
            className="custom-select"
            classNamePrefix="react-select"
        />
    );
};
