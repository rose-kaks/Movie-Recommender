import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';

ReactDOM.render(<App />, document.getElementById("root"));

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const TMDB_API_KEY = process.env.TMDB_API_KEY;

app.get("/api/movies", async (req, res) => {
    const { genre, rating } = req.query;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genre}&vote_average.gte=${rating}`;
    try {
        const response = await axios.get(url);
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movies" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));



