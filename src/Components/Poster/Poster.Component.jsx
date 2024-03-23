import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
  // return <div>{props.original_title}</div>;
  // this line is used for seeing outputs on the slider

  return (
    <Link to={`/movie/${props.id}`}>
      {/* to : here is used in place of href which is in anchor tag , this defines the location, hence that specific id */}
      {/* link tag is used in place of anchor tag in html , we dont use anchor cause it will reload the entire page again */}
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt="Poster"
            className="w-full h-full rounded-md"
          />
        </div>

        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}>
          {props.title}
        </h3>
      </div>
    </Link>
  );
};

export default Poster;
