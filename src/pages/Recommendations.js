import React from "react";
import { useParams } from "react-router-dom";
import moviesData from "../moviesData";
import './Recommendations.css';

const Recommendations = () => {
    const { mood } = useParams(); // Get selected mood from route.
    const filteredMovies = moviesData.filter((movie) => movie.mood === mood);

    const watchedMovies = filteredMovies.filter((movie) => movie.watched);
    const unwatchedMovies = filteredMovies.filter((movie) => !movie.watched);

    return (
        <div className="recommendation-container container mt-5">
            <h2 className="text-center"> "{mood}" ? We recommend watching : </h2>
            <div className="recommendation-lists mt-4">
                <div className="watched-movies mb-4">
                    <h3 className="section-heading">Already Watched</h3>
                    {watchedMovies.length ? (
                        <ul className="list-group mb-4">
                            {watchedMovies.map((movie) => (
                                <li key={movie.id} className="list-group-item watched-item">
                                    {movie.title}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="no-movies-text">No watched movies found for this mood.</p>
                    )}
                </div>

                <div className="unwatched-movies">
                    <h3 className="section-heading">Not Watched Yet</h3>
                    {unwatchedMovies.length ? (
                        <ul className="list-group">
                            {unwatchedMovies.map((movie) => (
                                <li key={movie.id} className="list-group-item unwatched-item">
                                    {movie.title}
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
