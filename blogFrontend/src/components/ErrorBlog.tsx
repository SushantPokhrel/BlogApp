import React from "react";

const ErrorBlog: React.FC = () => {
  return (
    <div className="not-found-404">
      <div>
        {" "}
        <h1>Failed to load content.</h1>
        <p>Please refresh the page or try again later.</p>
        <a href="">Refresh</a>
      </div>
    </div>
  );
};

export default ErrorBlog;
