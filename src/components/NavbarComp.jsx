import React from "react";
import MovieLogo from "../images/MovieLogo.jpg";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[70px]" src={MovieLogo} alt="" />
      <Link to="/" className="text-blue-500 text-2xl font-bold">
        Home
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-2xl font-bold">
        WatchList
      </Link>
    </div>
  );
};

export default NavbarComp;
