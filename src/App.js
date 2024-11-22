import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Watchlist from "./pages/Watchlist";
import Auth from "./pages/Auth";
import cineSelect from "./cineSelect.jpeg";

function App() {
    return (

        <div
            style={{
                backgroundImage: `url(${cineSelect})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }}
            className="background"
        >
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recommendations/:mood" element={<Recommendations />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;
