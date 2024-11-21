import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const getMovies = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    const response = await axios.get(url);
    return response.data.results;
};