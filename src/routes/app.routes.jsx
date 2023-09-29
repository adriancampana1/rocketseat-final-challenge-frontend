import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { New } from '../pages/New';
import { EditProduct } from '../pages/EditProduct';
import { Teste } from '../pages/Teste';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/details/:id" element={<Details></Details>}></Route>
            <Route path="/new" element={<New></New>}></Route>
            <Route
                path="/edit/:id"
                element={<EditProduct></EditProduct>}
            ></Route>
        </Routes>
    );
}
