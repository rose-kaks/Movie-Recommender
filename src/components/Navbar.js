import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">🎥 Movie Recommender</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Watchlist">Watchlist</Link>
                        </li>
                        <li className="nav-item">
<<<<<<< HEAD
                            <Link className="nav-link" to="/auth">Login/Signup</Link>
=======
                            <Link className="nav-link" to="/auth">Login/Sign-up</Link>
>>>>>>> c57b1446d5cc9cbd16bbbd8d32c39f39828c5b00
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
