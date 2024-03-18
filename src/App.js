import "./App.css"; 

// react slicks for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Routers
import { Routes, Route } from "react-router-dom";

// pages
import PlayPage from "./Pages/Play.page";
import MoviePage from "./Pages/Movie.page";
import HomePage from "./Pages/Home.page";

import axios from "axios";
// for removing redundancies in using API callings in this app

// import dotenv from "dotenv";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

// axios.defaults.params["api_key"] = "00faa6acb6cc522b15d1d4300e4a28e6";
// axios.defaults.params["api_key"] = process.env.KEY; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* http://localhost:3000 */}

      <Route path="/movie/:id" element={<MoviePage />} />
      {/* http://localhost:3000/movie/123 */}

      <Route path="/plays" element={<PlayPage />} />
      {/* http://localhost:3000/plays */}
    </Routes>
  );
}

export default App;
