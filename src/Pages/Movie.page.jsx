import React, { useEffect, useState, useContext } from "react";
import MovieLayoutHoc from "../Layouts/Movie.layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";

import { FaCcApplePay, FaCcVisa, faCcApplePay } from "react-icons/fa";

// context api
import { MovieContext } from "../ContextAPI/movie.Context";

import MovieHero from "../Components/MovieHero/MovieHero.Component";

const MoviePage = () => {
  const { id } = useParams();

  // useState is for props while useContext is for children/ APIs
  const { movie , setMovie} = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      // credits or cast API
      const getCast = await axios.get(`/movie/${id}/credits`);
      // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=00faa6acb6cc522b15d1d4300e4a28e6

      setCast(getCast.data.cast);
      // its getCast.data.cast because of the json format , getCast gives all data under which we want data under which we want cast
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      // similar movies to the movie requested API
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      // https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=00faa6acb6cc522b15d1d4300e4a28e6

      setSimilarMovies(getSimilarMovies.data.results);
      // here it's results in the json data set so we wrote accordingly
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      // Recommended movies based on the movie selected API
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      // https://api.themoviedb.org/3/movie/{movie_id}/recommendations/?api_key=00faa6acb6cc522b15d1d4300e4a28e6

      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);

  useEffect(() => {
    // for context API setting the movie details in the state movie and displaying it like {movie.overview}
    const requestMovie = async () => {
      const getMovie = await axios.get(`/movie/${id}`);
      // https://api.themoviedb.org/3/movie/{movie_id}?api_key=00faa6acb6cc522b15d1d4300e4a28e6

      setMovie(getMovie.data);
      // its getMovie.data because of the json format , getCast gives all data under which we want data under which we want cast
    };
    requestMovie();
  }, [id]);

  const settingsCast = {};
  const settings = {};

  return (
    <>
    <MovieHero/>
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl gap-3">
            About the Movie
          </h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row lg:w-2/4">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all Rupay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all Rupay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* recommended movies */}
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        
        <PosterSlider
          config={settings}
          title="BMS Exclusive Movies"
          posters={similarMovies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);
