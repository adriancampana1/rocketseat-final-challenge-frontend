import { Container } from './styles';

import logo_user from '../../assets/images/logo/logo-user.svg';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const SignUp = () => {
    return (
        <Container>
            <Logo
                image={logo_user}
                altDescription="Logotipo Food Explorer"
            ></Logo>
            <form>
                <h1>Crie sua conta</h1>
                <Input
                    label="Nome"
                    placeholder="Exemplo: Maria da Silva"
                ></Input>
                <Input
                    label="Email"
                    placeholder="Exemplo: exemplo@exemplo.com"
                ></Input>
                <Input label="Senha" placeholder="Mínimo 6 caracteres"></Input>
                <Button title="Criar conta"></Button>
                <a href="/">Já tenho uma conta</a>
            </form>
        </Container>
    );
};
