import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Movies from './pages/movies';

function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/movies" element={ <Movies /> } />
        </Routes>
    );
}

export default AppRoutes;