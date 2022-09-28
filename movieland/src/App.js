import React from 'react';
import { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=4ff64b39';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        searchMovies("Thor")
    }, []);

    return (
        <h1>Movies</h1>
    )
}

export default App;