import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > label {
        font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.SIZE};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.WEIGHT};
        line-height: ${({ theme }) =>
            theme.FONTS.ROBOTO_SMALL_REGULAR.LINEHEIGHT};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    .input {
        height: 48px;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        border: 0;
        border-radius: 8px;

        input,
        svg {
            background-color: transparent;
            border: none;

            font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.SIZE};
            font-weight: ${({ theme }) =>
                theme.FONTS.ROBOTO_SMALL_REGULAR.WEIGHT};
            line-height: ${({ theme }) =>
                theme.FONTS.ROBOTO_SMALL_REGULAR.LINEHEIGHT};
        }

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.SIZE};
            margin-left: 14px;
        }

        input {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            width: 100%;
            padding: 14px 0 14px 14px;
        }

        > input:focus {
            outline: none;
            border: none;
        }

        > input::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`;
