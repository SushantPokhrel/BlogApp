import React from "react";
import NavFilter from "../components/NavFilter";
import { Outlet } from "react-router-dom";

const HomeSecure: React.FC = () => {
  return (
    <div className="home-section">
      <div className="left-section">
        {" "}
        <NavFilter />
        <div className="outlet-left-wrapper">
          <Outlet />
        </div>
      </div>
      <div className="right-section">
        <div className="right-sticky">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore
        autem quod nostrum molestias voluptate mollitia hic iste eveniet eaque
        cumque, aperiam est id debitis cum quis ipsa, adipisci recusandae!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore
        autem quod nostrum molestias voluptate mollitia hic iste eveniet eaque
        cumque, aperiam est id debitis cum quis ipsa, adipisci recusandae!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore
        autem quod nostrum molestias voluptate mollitia hic iste eveniet eaque
        c
        </div>
      </div>
    </div>
  );
};

export default HomeSecure;
