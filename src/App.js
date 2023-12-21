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
