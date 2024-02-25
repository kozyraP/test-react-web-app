import React from "react";
import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

import "./App.css";
import NavBar from "./NavBar";


const API_KEY = "e0720afa";
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

const SearchMovie = () => {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
console.log(`${API_URL}&s=${title}`);
        setMovies(data.Search);

    }


    useEffect(() => {
        searchMovies("Batman");
    }, []);

    return (
        <>
        <NavBar />
        <div className="app">
            <h1>Search Movie App !!!</h1>
            <div className="search">
                <input
                    placeholder="Search for a movie"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            searchMovies(search)
                        }
                    }}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(search)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {
                            movies.map((movie) => (<MovieCard key={movie.imdbID} movie={movie} />))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>
        </>
    );
}

export default SearchMovie;