import { styled } from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    width: 100%;
`;

export const Content = styled.div`
    width: 100%;
    padding: 4.4rem 2.4rem 2.4rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 4.8rem;

    @media (min-width: 900px) {
        padding: 8rem 8rem 4.8rem;
        gap: 4.8rem;
    }

    @media (min-width: 1100px) {
        padding: 16.4rem 12rem 4.8rem;
    }
`;
