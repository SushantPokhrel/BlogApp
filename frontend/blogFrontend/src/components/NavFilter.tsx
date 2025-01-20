import React from "react";
import { NavLink } from "react-router-dom";
const NavFilter: React.FC = () => {
  const activeStyle = {
    color: "black",
  };

  return (
    <div>
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
            Web
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/app-development"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            App
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/artificial-intelligence"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            AI
          </NavLink>
        </li>
      </ul>{" "}
    </div>
  );
};

export default NavFilter;
