import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function IngredientItem({ isnew, value, onClick, ...rest }) {
    return (
        <Container isnew={isnew}>
            <input type="text" value={value} readOnly={!isnew} {...rest} />

            <button
                type="button"
                onClick={onClick}
                className={isnew ? 'button-add' : 'button-delete'}
            >
                {isnew ? <FiPlus></FiPlus> : <FiX></FiX>}
            </button>
        </Container>
    );
}
