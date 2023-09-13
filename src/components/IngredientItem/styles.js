import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) =>
        isNew ? 'transparent' : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: ${({ theme, isNew }) =>
        isNew ? `1px dashed ${theme.COLORS.LIGHT_300}` : 'none'};

    border-radius: 10px;
    padding-right: 14px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    > input {
        padding: 12px;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }
`;
