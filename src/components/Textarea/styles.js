import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    min-height: 17rem;
    padding: 1.2rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    > textarea:focus {
        outline: none;
        border: none;
    }
`;
