import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About me</button>
      </Link>
    </div>
  );
};

export default Navbar;
