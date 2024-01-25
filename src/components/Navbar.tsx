import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Stocks</Link>
      <Link to="/favourites">Favorites</Link>
      <Link to="/cart">cart</Link>
    </div>
  );
}

export default Navbar;
