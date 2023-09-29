import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import logo_user from '../../assets/images/logo/logo-user.svg';
import logo_user_admin from '../../assets/images/logo/logo-admin.svg';

import { Logo } from '../Logo';
import { Input } from '../Input';
import { OrderButton } from '../OrderButton';

import { useAuth } from '../../hooks/auth';

import { FiSearch, FiLogOut, FiMenu, FiX } from 'react-icons/fi';

export const Header = ({ isAdmin = false, onSearchValueChange }) => {
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const searchValueChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearchValueChange(value);
    };

    const { signOut } = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        signOut();
        navigate('/');
    }

    function handleMenuMobile() {
        open ? setOpen(false) : setOpen(true);
    }

    return (
        <Container>
            <div className={`mobile-header ${open ? '' : 'open'}`}>
                <button className="menu" onClick={handleMenuMobile}>
                    <FiMenu></FiMenu>
                </button>
                {isAdmin ? (
                    <Logo image={logo_user_admin}></Logo>
                ) : (
                    <Logo image={logo_user}></Logo>
                )}
                {isAdmin ? (
                    ''
                ) : (
                    <OrderButton title="Pedidos" quantity="0"></OrderButton>
                )}
            </div>
            <div className={`modal-menu-mobile ${open ? 'open' : ''}`}>
                <header>
                    <button className="menu" onClick={handleMenuMobile}>
                        <FiX></FiX> Menu
                    </button>
                </header>
                <main>
                    <Input
                        icon={FiSearch}
                        value={searchValue}
                        onChange={searchValueChange}
                        placeholder="Busque por pratos ou ingredientes"
                    ></Input>
                    {isAdmin ? (
                        <a onClick={() => navigate('/new')}>Novo prato</a>
                    ) : (
                        ''
                    )}
                    <a onClick={handleSignOut}>Sair</a>
                </main>
            </div>
            <div className="desktop-header">
                {isAdmin ? (
                    <Logo image={logo_user_admin}></Logo>
                ) : (
                    <Logo image={logo_user}></Logo>
                )}
                <Input
                    icon={FiSearch}
                    value={searchValue}
                    onChange={searchValueChange}
                    placeholder="Busque por pratos ou ingredientes"
                ></Input>
                {isAdmin ? (
                    <OrderButton title="Novo prato" isAdmin></OrderButton>
                ) : (
                    <OrderButton title="Pedidos" quantity="0"></OrderButton>
                )}
                <FiLogOut
                    className="logout"
                    onClick={handleSignOut}
                    cursor="pointer"
                ></FiLogOut>
            </div>
        </Container>
    );
};
