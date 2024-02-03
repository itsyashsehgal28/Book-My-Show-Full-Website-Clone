import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";

function NavSm() {
  // Navbar for small screen
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Bangalore <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <button>Use App</button>
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  // Navbar for medium screen size 
  return (
    <>
      <div className="w-10 h-10">
        <img src="" alt="logo" className="w-full h-full" />
      </div>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
          placeholder="Search for movies, events, plays, sports and activites"
        />
      </div>
    </>
  );
}

function NavLg() {
  // Navbar for large screen size 
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img src="" alt="logo" className="w-full h-full" />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus: outline-none"
              placeholder="Search for movies, events, plays, sports and activites"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Main Component
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* nav is a semantic tag used specifically for navbar */}

      <div className="md:hidden">
        {/* Small Screen NavBar */}
        {/* >= md its hidden, only visible on small screen size */}
        {/* WE CAN ALSO WRITE ---->  <div className="sm:flex md:hidden lg:hidden">  BUT THAT IS SHORT FORM */}

        <NavSm />
        {/* we are calling our small nav function here so this div of md:hidden hides medium and all sizes greater than that 
            and acts as an if condition so whatever is written inside works only for small screen size hence calling NavSm */}
      </div>

      {/* Medium Screen Size */}
      <div className="hidden md:flex lg:hidden">
        {/* hidden on small , flex on medium and then hidden on large and extra large */}
        <NavMd />
      </div>
      

      {/* Large Screen Size */}
      <div className="hidden md:hidden lg:flex">
        {/* hidden on small and medium but visible on large and extra large */}
        {/* jo bhi hoga aage tak chalega chahe dikha lo ya chupa lo */}
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
