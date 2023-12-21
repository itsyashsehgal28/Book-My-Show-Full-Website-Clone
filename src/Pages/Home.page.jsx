import React, { useState } from "react";

// layouts or hoc
import DefaultLayoutHoc from "../Layouts/Default.layout";

// Components
import EntertainmentCard from "../Components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Component";
import Arrows from "../Components/HeroCarousel/Arrows.Component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
  // these are the states 
  // we will set a list of recommended movies , there are more than 1 value so we use an array

  return (
    <>
      <HeroCarousel />
      {/* calling the hero carousel component inside homepage , this hero carousel is for the movies that are showcased */}

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800">
          The Best of Entertainment
        </h1>
        <EntertainmentCard />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          // these are the props or arguements to show the different movie posters under recommended movies
          title="Recommended Movies"
          // title of this slider , this shows on hover 
          subject="List of Recommended Movies"
          // a little info about the component
          poster={recommendedMovies}
          // recommendedMovies is an array toh ismai list aajayegi of all movies with their info
          isDark={false}
          // this is a parameter which makes the background dark so it's false here which means we dont want it
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              // src="https://tse1.mm.bing.net/th?id=OIP.5aKWh9rgmA5Jqytk8-D8DwHaCp&pid=Api&rs=1&c=1&qlt=95&w=259&h=92"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>

          <PosterSlider
            title="Premier Movies"
            subject="Brand New Releases Every Friday"
            poster={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Stream Events"
          subject="Online Stream Events Every Friday"
          poster={onlineStreamEvents}
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
