import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Teste } from '../pages/Teste';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
                path="/details"
                element={<Details isAdmin></Details>}
            ></Route>
        </Routes>
    );
}
