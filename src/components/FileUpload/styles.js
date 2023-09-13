import styled from 'styled-components';

export const Container = styled.div`
    button {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        border: none;
        border-radius: 8px;
        padding: 14px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 1rem;
    }
`;
