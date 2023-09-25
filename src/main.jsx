import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from './hooks/auth';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { Routes } from './routes';

import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles></GlobalStyles>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);
