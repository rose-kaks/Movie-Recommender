import React, { useState, useEffect } from "react";

const Watchlist = () => {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        setWatchlist(storedWatchlist);
    }, []);

    const removeFromWatchlist = (movieId) => {
        const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
        setWatchlist(updatedWatchlist);
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Your Watchlist</h2>
            {watchlist.length ? (
                <ul className="list-group">
                    {watchlist.map((movie) => (
                        <li key={movie.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {movie.title}
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => removeFromWatchlist(movie.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted text-center">Your watchlist is empty!</p>
            )}
        </div>
    );
};

export default Watchlist;
