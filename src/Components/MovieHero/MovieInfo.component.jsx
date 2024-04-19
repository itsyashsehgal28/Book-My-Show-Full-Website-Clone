import React, {useContext, useState} from 'react';
import { MovieContext } from "../../ContextAPI/movie.Context";

const MovieInfo = () => {
    const [isOpen , setIsOpen] = useState(false);
    const [price , setPrice] = useState(0);

    const { movie } = useContext(MovieContext);

    const genres = movie.genres?.map(({name})=> name).join(", ");

    const rentMovie = () => {
        setIsOpen(true);
        setPrice(14);
    }

    const buyMovie = () => {
      setIsOpen(true);
      setPrice(30);
    };

  return (
    <>
      {/* <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />  */}

      <div className="flex flex-col gap-8">
        <h1 className="text-white font-bold text-4xl">
          {movie.original_title}
        </h1>
        <div className="text-white flex flex-col gap-2">
          <h4>4.5K Ratings</h4>
          <h4>English , Hindi , Tamil</h4>
          <h4>
            {movie.runtime} Min | {genres}
          </h4>
        </div>

        <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
          <button className="bg-red-500 w-40 py-3 text-white font-semibold rounded-lg">
            Rent $14 
          </button>
          <button className="bg-red-500 w-40 py-3 text-white font-semibold rounded-lg">
            Buy $30 
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;