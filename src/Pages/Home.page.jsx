import React, { useEffect, useState } from "react";

// layouts or hoc
import DefaultLayoutHoc from "../Layouts/Default.layout";

// Components
import EntertainmentCard from "../Components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";

import axios from "axios";
// for API , connecting frontend and backend

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
  // these are the states
  // we will set a list of recommended movies , there are more than 1 value so we use an array


  // useEffect(() => {
  //   // useEffect is a hook in react it is used to fetch data , timers , subscriptions , AFTER COMPONENT RENDERING.
  //   // api calling before ----> get.apiName('/' , async()=>{}) ----> but now with axios its like this
    
  //   const requestTopRatedMovies = async () => {
  //     const getTopRatedMovies = await axios.get(
  //       "https://api.themoviedb.org/3/movie/top_rated?api_key=00faa6acb6cc522b15d1d4300e4a28e6"
  //     );
  //     setRecommendedMovies(getTopRatedMovies.data.results);
  //   };
  //   requestTopRatedMovies();
  // }, []);


  // useEffect(() => {
  //   const requestPopularMovies = async () => {
  //     const getPopularMovies = await axios.get(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=00faa6acb6cc522b15d1d4300e4a28e6"
  //     );
  //     setPremierMovies(getPopularMovies.data.results);
  //   };
  //   requestPopularMovies();
  // }, []);


  // useEffect(() => {
  //   const requestUpcoming = async () => {
  //     const getUpcoming = await axios.get(
  //       "https://api.themoviedb.org/3/movie/upcoming?api_key=00faa6acb6cc522b15d1d4300e4a28e6"
  //     );
  //     setOnlineStreamEvents(getUpcoming.data.results);
  //   };
  //   requestUpcoming();
  // }, []);


//NOW THIS APPROACH OF USEEFFECT BECOMES REDUNDANT SINCE WE HAVE TO WRITE THE SAME STATEMENTS AGAIN AND AGAIN , INSTEAD WE CAN DO THIS


useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      //"https://api.themoviedb.org/3/movie/top_rated?api_key=00faa6acb6cc522b15d1d4300e4a28e6"

      setRecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  /* step by step explanation of USEEFFECT:

    1.  useEffect requires a callback function 
    2.  We make the function async since we are fetching value from the database which will take time 
    3.  We store the recieved json format in the second variable
    4.  We take out what we need from the recieved variable and set it in the variable which needs to be set
    5.  We also create an empty array to store the result
    6.  Since useEffect required a function we call our function at the end 
  */

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      //"https://api.themoviedb.org/3/movie/popular?api_key=00faa6acb6cc522b15d1d4300e4a28e6"

      setPremierMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);


  useEffect(() => {
    const requestUpcoming = async () => {
      const getUpcoming = await axios.get("/movie/upcoming");
      //"https://api.themoviedb.org/3/movie/upcoming?api_key=00faa6acb6cc522b15d1d4300e4a28e6"

      setOnlineStreamEvents(getUpcoming.data.results);
    };
    requestUpcoming();
  }, []);


  return (
    <>
      <HeroCarousel />
      {/* calling the hero carousel component inside homepage , this hero carousel is for the movies that are showcased */}

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Live Events
        </h1>
        <EntertainmentCard />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          // these are the props or arguements to show the different movie posters under recommended movies
          title="Recommended Movies"
          // title of this slider , this shows on hover
          subTitle="List of Recommended Movies"
          // a little info about the component
          posters={recommendedMovies}
          // recommendedMovies is an array toh ismai list aajayegi of all movies with their info
          isDark={false}
          // this is a parameter which makes the background dark so it's false here which means we dont want it
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>

          <PosterSlider
            title="Premier Movies"
            subTitle="Brand New Releases Every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Stream Events"
          subTitle="Online Stream Events Every Friday"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};



// export default HomePage ;
export default DefaultLayoutHoc(HomePage);
// this homepage will go as a component to the default hoc




/*
    WORKFLOW :  index.js (will get root and root will render app.js)----> 
                app.js (there are 3 paths we are at home page )     ---->
                Home.page.jsx (will be sent as a whole component comprising of smaller components to defaultHoc)----> 
                DefaultLayout.jsx (this will get homepage as a component as a whole and will trigger the navbar and footer)
*/

// in homepage we have the homepage / link present in app.js
