import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Nav: React.FC = () => {
  return (
    <nav className="nav-bar">
      <h1>
        <Link to="/">VibeWrite</Link>
      </h1>
      <form>
        <input
          type="search"
          className="search-bar-nav"
          placeholder="search here"
        />
        <button className="search-btn">
          <MagnifyingGlassIcon className="search-icon" />
        </button>
      </form>
      <div className="nav-btn-container">
        <Link to="/login" className="nav-btn login-btn">
          Login
        </Link>
        <Link to="/signup" className="nav-btn signup-btn">
          SignUp
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
