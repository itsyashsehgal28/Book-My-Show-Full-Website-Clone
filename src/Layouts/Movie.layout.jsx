// this is the layout for the movie page , it will have the MovieNavbar

/*
    import React from 'react'

    const Movie.layout = () => {
      return (
        <div>Movie.layout</div>
      )
    }
    
    export default Movie.layout
*/

// this is the shortcut , this is because of the react redux extension (ES7+ React/Redux/React-Native snippets)
// write ----> rafce (react arrow function export component) this gives you the below basic component 

import React from 'react' ;
import MovieNavbar from '../Components/Navbar/MovieNavbar.Component';

const MovieLayoutHoc = 
(Component) => // layout encapsulate the page so we will have certain component , hence we are calling the component
({...props}) => // the functional component may have some parameters so we are using spread operator for the parameters
{
  return (
    <div>
      <MovieNavbar />
      {/* Movie navbar component */}

      <Component {...props} />
      {/* in the return statement we can make use of the props to manipulate the component */}

      <div>Footer , static until i make it</div>
      
    </div>
  );
};

export default MovieLayoutHoc;

// this is the structure of HOC , check devtown classes to learn again