// this is my default layout so it has my default navbar 

// rafce

import React from 'react' ;
import Navbar from '../Components/Navbar/Navbar.Component';

const DefaultLayoutHoc = 
(Component) => // layout encapsulates the page so we will have certain components in it, hence we are calling the component
({...props}) => //the functional component may have some parameters so we are using spread operator for the parameters
{
  return (
    <div>
        <Navbar />
        {/* default navbar component , it is encapsulated under default hoc for homPage and playPage */}

        <Component {...props} />
        {/* in the return statement we can make use of the props to manipulate the component */}    

        <div>Footer</div>
    
    </div>
  );
};

export default DefaultLayoutHoc;