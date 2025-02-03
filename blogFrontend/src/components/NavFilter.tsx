import React from "react";
import { NavLink } from "react-router-dom";
const NavFilter: React.FC = () => {
  const activeStyle = {
    color: "black",
  };

  return (
    <div>
      <div className="ul-filter-sticky">
      <ul className="ul-filter">
        <li>
          <NavLink
            to="/home"
            end
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            For you
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/web-development"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Web Development
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/app-development"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            App Development
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/artificial-intelligence"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Artificial Intelligence
          </NavLink>
        </li>
      
        
      </ul>{" "}
    </div>
    </div>
  );
};

export default NavFilter;
