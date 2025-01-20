import React from "react";

function BlogCard() {
  return (
    <div className="blog-card">
      <div className="blog-author">
        <img
          src="https://miro.medium.com/v2/resize:fill:64:64/0*icKuIram7e9VQWDw"
          alt="profile"
        />
        <p>Lorem ipsum.</p>
      </div>
      <div className="blog-description">
        <div>
          <h2 className="blog-title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt,
            eaque.
          </h2>
          <p className="blog-summary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            impedit!
          </p>
        </div>
        <div className="blog-img">
          <img
            src="https://miro.medium.com/v2/resize:fill:173:116/1*dr5OBWrKBLAoiA__9wUP-w.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
