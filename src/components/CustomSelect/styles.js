import styled from 'styled-components';

export const Container = styled.div`
    .custom-select .react-select__menu {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }

    .custom-select .react-select__option {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
    }

    .custom-select .react-select__option--is-focused {
        background-color: ${({ theme }) => theme.COLORS.DARK_600};
    }

    .custom-select .react-select__single-value {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
`;
