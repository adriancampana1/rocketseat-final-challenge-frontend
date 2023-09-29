import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo_user from '../../assets/images/logo/logo-user.svg';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

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
                    onChange={(e) => setEmail(e.target.value)}
                ></Input>
                <Input
                    label="Senha"
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    onChange={(e) => setPassword(e.target.value)}
                ></Input>
                <Button title="Entrar" onClick={handleSignIn}></Button>
                <a>
                    <Link to="/register">Criar conta</Link>
                </a>
            </form>
        </Container>
    );
};
