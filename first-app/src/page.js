import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Movies from './pages/movies';
import MoviePage from './pages/templates/moviePage';

class Page extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/movies" element={ <Movies /> } />
                <Route exact path="/movies/*" element={ <MoviePage /> } />
            </Routes>
        );
    }
}

export default Page;