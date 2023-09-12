import { Container } from './styles';

import logo from '../../assets/images/logo/logo-footer.svg';
import { Logo } from '../Logo';

export const Footer = () => {
    return (
        <Container>
            <Logo image={logo}></Logo>
            <p>© 2023 - Todos os direitos reservados</p>
        </Container>
    );
};
