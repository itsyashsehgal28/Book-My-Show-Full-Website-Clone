import React, { useContext } from 'react';
import { MovieContext } from '../../ContextAPI/movie.Context';

const MovieHero = () => {

const {movie} = useContext(MovieContext)
  return (
    <div>MovieHero</div>
  )
}

export default MovieHero