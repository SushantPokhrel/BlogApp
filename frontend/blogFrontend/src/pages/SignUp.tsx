import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="userForm-container">
      <h1>Sign Up</h1>
      <form className="form-signup">
        <div>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            required
            minLength={6}
          />
        </div>
        <button type="submit">Sign Up</button>
        <div>
          <p>
            {" "}
            <small>Already have an account?</small> <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
