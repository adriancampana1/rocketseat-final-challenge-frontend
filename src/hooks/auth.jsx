import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password });
            const { user, token, user_role } = response.data;

            localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
            localStorage.setItem('@foodexplorer:token', token);
            localStorage.setItem('@foodexplorer:role', user_role);

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token, user_role });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível entrar.');
            }
        }
    }

    function signOut() {
        localStorage.removeItem('@foodexplorer:user');
        localStorage.removeItem('@foodexplorer:token');
        localStorage.removeItem('@foodexplorer:role');

        setData({});
    }

    function isAdmin() {
        const role = localStorage.getItem('@foodexplorer:role');
        return role === '1';
    }

    function isUser() {
        const role = localStorage.getItem('@foodexplorer:role');
        return role === '0';
    }

    useEffect(() => {
        const token = localStorage.getItem('@foodexplorer:token');
        const user = localStorage.getItem('@foodexplorer:user');

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user),
                isAdmin,
                isUser,
            });
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                user: data.user,
                isAdmin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };
