import React from "react";
import { Link } from "react-router-dom";
const Landing: React.FC = () => {
  return (
    <section className="landing">
      <div className="hero-div">
        {" "}
        <h1>Share Your Thoughts, Inspire the World – Start Blogging Today!</h1>
        <Link className="hero-btn" to="/signup">Start here</Link>
      </div>
      <div>
        <img src="blog-img" alt="" className="img-landing" />
      </div>
    </section>
  );
};

export default Landing;
