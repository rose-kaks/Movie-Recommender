import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Watchlist from "./pages/Watchlist";
import Login from "pages/Login";
import Signup from "pages/Signup";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recommendations/:mood" element={<Recommendations />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
