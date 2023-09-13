import styled from 'styled-components';

export const Container = styled.div`
    .custom-select .react-select__menu {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }

    .custom-select .react-select__option {
        font-family: 'Poppins', sans-serif;
    }

    .custom-select .react-select__option--is-focused {
        background-color: ${({ theme }) => theme.COLORS.DARK_600};
    }

    .custom-select .react-select__multi-value {
        background-color: ${({ theme }) => theme.COLORS.DARK_600};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        padding: 0.5rem;
        border-radius: 10px;
    }

    .custom-select .react-select__multi-value__label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`;
