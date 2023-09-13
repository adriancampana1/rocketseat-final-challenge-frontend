import { Container } from './styles';
import CreatableSelect from 'react-select';

const options = [];

export const CustomSelect = () => {
    return (
        <Container>
            <CreatableSelect
                options={options}
                isMulti
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
            />
        </Container>
    );
};
