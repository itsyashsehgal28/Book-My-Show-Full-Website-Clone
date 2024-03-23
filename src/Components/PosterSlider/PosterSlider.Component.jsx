import React from 'react'
import Slider from 'react-slick';
import Poster from '../Poster/Poster.Component';

const PosterSlider = (props) => {
  
  const {title , subtitle ,posters , isDark , config} = props
  // right value goes into the left , first value of props goes into title and so on

  const settings = {
    infinte: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" :"text-black"
          }`}>
          {title}
        </h3>
        <p
          className={`text-xl font-bold ${
            isDark ? "text-white" : "text-gray-800"
          }`}>
          {subtitle}
        </p>
      </div>
      <Slider {...settings}>
        {posters.map((each , index)=> (<Poster {...each} isDark={isDark} key={index} />))}
        {/* posters is the photo of the movie or the event , hence for each posters we will create a final poster 
            here we are selecting the title , subtitle , photo and isDark or not and collecting it together
            in Poster we will combine them and make the slider */}
      </Slider>
    </>
  );
}

export default PosterSlider ;