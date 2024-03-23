// context api is used to make the components redundant free , we dont need to write same components again and again

// its used to call other components and fetch data from them

// it can be used for dom operations like edit , fetch , delete , update any component and can be called in any component

// instead of props we call it children since this acts as a parent component , parents can contact children but vice-versa 
//  is not possible

// HOC is called for specific components like movielayout for movie page and default for home but context API is for every component 

// this is like hoc or layouts where we get info from the children or other components

import React , {createContext, useState} from "react";

export const MovieContext = createContext();

const MovieProvider = ({children}) => {
    const [movie, setMovie] = useState({
      id: 0,
      original_title: "",
      overview: "",
      backdrop_path: "",
      poster_path: "",
    });
  return <MovieContext.Provider value={{movie , setMovie}}>{children}</MovieContext.Provider>;
};

export default MovieProvider;
