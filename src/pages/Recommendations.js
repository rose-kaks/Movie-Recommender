import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moviesData from "../moviesData";
import "./Recommendations.css"; // Custom CSS for styling

const Recommendations = () => {
    const { mood } = useParams();
    const [movies, setMovies] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    const [successMessage, setSuccessMessage] = useState(""); // Feedback message

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem("movies")) || moviesData;
        const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        setMovies(storedMovies);
        setWatchlist(storedWatchlist);
    }, []);

    const saveToLocalStorage = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const filteredMovies = movies.filter((movie) => movie.mood === mood);

    const toggleWatched = (movieId) => {
        const updatedMovies = movies.map((movie) =>
            movie.id === movieId ? { ...movie, watched: !movie.watched } : movie
        );
        setMovies(updatedMovies);
        saveToLocalStorage("movies", updatedMovies);
    };

    const addToWatchlist = (movie) => {
        if (!watchlist.some((item) => item.id === movie.id)) {
            const updatedWatchlist = [...watchlist, movie];
            setWatchlist(updatedWatchlist);
            saveToLocalStorage("watchlist", updatedWatchlist);

            setSuccessMessage(`"${movie.title}" added to your watchlist!`);
            setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
        } else {
            alert("This movie is already in your watchlist!");
        }
    };

    return (
        <div className="recommendation-container container mt-5">
            <h2 className="text-center mb-4">Feeling "{mood}"? Here's what we recommend:</h2>

            {successMessage && (
                <div className="alert alert-success text-center mb-4" role="alert">
                    {successMessage}
                </div>
            )}

            <div className="recommendation-lists row g-4">
                <div className="col-md-6">
                    <h3 className="section-heading">Already Watched</h3>
                    {filteredMovies.filter((movie) => movie.watched).length ? (
                        <ul className="list-group">
                            {filteredMovies
                                .filter((movie) => movie.watched)
                                .map((movie) => (
                                    <li key={movie.id} className="list-group-item d-flex justify-content-between align-items-center watched-item">
                                        {movie.title}
                                        <div>
                                            <button
                                                className="btn btn-warning btn-sm me-2"
                                                onClick={() => toggleWatched(movie.id)}
                                            >
                                                Mark as Unwatched
                                            </button>
                                            <button
                                                className="btn btn-info btn-sm"
                                                onClick={() => addToWatchlist(movie)}
                                            >
                                                Add to Watchlist
                                            </button>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    ) : (
                        <p className="no-movies-text">No watched movies found for this mood.</p>
                    )}
                </div>

                <div className="col-md-6">
                    <h3 className="section-heading">Not Watched Yet</h3>
                    {filteredMovies.filter((movie) => !movie.watched).length ? (
                        <ul className="list-group">
                            {filteredMovies
                                .filter((movie) => !movie.watched)
                                .map((movie) => (
                                    <li key={movie.id} className="list-group-item d-flex justify-content-between align-items-center unwatched-item">
                                        {movie.title}
                                        <div>
                                            <button
                                                className="btn btn-success btn-sm me-2"
                                                onClick={() => toggleWatched(movie.id)}
                                            >
                                                Mark as Watched
                                            </button>
                                            <button
                                                className="btn btn-info btn-sm"
                                                onClick={() => addToWatchlist(movie)}
                                            >
                                                Add to Watchlist
                                            </button>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    ) : (
                        <p className="no-movies-text">No unwatched movies found for this mood.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Recommendations;
