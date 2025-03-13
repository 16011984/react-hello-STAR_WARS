import { Link } from "react-router-dom";
import '../styles/navbar.css';


const Navbar = () => {

  return (
    <div className="navbar-container">

	<a href="">Characters</a>
	<a href="">Veicles</a>
	<a href="">Planets</a>
	<a href="">Favorites</a>

    <form className="navbar-search" role="search">
    <input className="navbar-imput" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn" type="submit"> Search </button>

      </form>
    </div>
  );
};

export default Navbar;
