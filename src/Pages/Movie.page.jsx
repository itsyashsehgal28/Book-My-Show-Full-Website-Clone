import React, { useEffect, useState, useContext } from "react";
import MovieLayoutHoc from "../Layouts/Movie.layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";

import { FaCcVisa, faCcApplePay } from "react-icons/fa";

import { movieContext } from "../ContextAPI/movie.Context";
// context api

const MoviePage = () => {
  const { id } = useParams();

  // useState is for props while useContext is for children/ APIs
  const { movieDetails } = useContext(movieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=00faa6acb6cc522b15d1d4300e4a28e6

      setCast(getCast.data.cast);
      // its getCast.data.cast because of the json format , getCast gives all data under which we want data under which we want cast
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      // https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=00faa6acb6cc522b15d1d4300e4a28e6

      setSimilarMovies(getSimilarMovies.data.results);
      // here it's results in the json data set so we wrote accordingly
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      // https://api.themoviedb.org/3/movie/{movie_id}/recommendations/?api_key=00faa6acb6cc522b15d1d4300e4a28e6

      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);

  const settingsCast = {};
  const settings = {};

  return (
    <>
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl gap-3">
            About the Movie
          </h1>
          <p>{movieDetails.overview}</p>
        </div>
      </div>

      <div className="my-8">
        <hr />
      </div>

      <div className="my-8">
        <h2 className="text-gray-800 font-bold text-2xl mb-3">
          Applicable Offers
        </h2>
        <div className="flex flex-col gap-3 lg-flex-row">
          <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
            <div className="w-8 h-8">
              <FaCcVisa className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);
