import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import logo_user from '../../assets/images/logo/logo-user.svg';

import { api } from '../../services/api';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert('Preencha todos os campos.');
        }

        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuário cadastrado com sucesso!');
                navigate('/');
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('Não foi possível cadastrar o usuário');
                }
            });
    }

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
                    onChange={(e) => setName(e.target.value)}
                ></Input>
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
                <Button title="Criar conta" onClick={handleSignUp}></Button>
                <a href="/">Já tenho uma conta</a>
            </form>
        </Container>
    );
};
