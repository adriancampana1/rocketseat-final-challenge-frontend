import { Container } from './styles';

import logo_user from '../../assets/images/logo/logo-user.svg';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const SignIn = () => {
    return (
        <Container>
            <Logo
                image={logo_user}
                altDescription="Logotipo Food Explorer"
            ></Logo>
            <form>
                <h1>Faça login</h1>
                <Input
                    label="Email"
                    placeholder="Exemplo: exemplo@exemplo.com"
                ></Input>
                <Input label="Senha" placeholder="Mínimo 6 caracteres"></Input>
                <Button title="Entrar"></Button>
                <a href="/register">Criar conta</a>
            </form>
        </Container>
    );
};
