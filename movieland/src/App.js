import React from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=4ff64b39';

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2015",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.search);
    }

    useEffect(() => {
        searchMovies("Thor");
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input placeholder='Search for movies' value='superman' onChange={() => {}}/>
                <img src={SearchIcon} alt='search' onClick={() => {}}/>
            </div>

            <div className='container'>
                <MovieCard title={movie1.Title} year={movie1.Year} poster={movie1.Poster}/>
            </div>
        </div>
    )
}

export default App;