import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password, username);
    if (!email || !password || !username) return;
    try {
      const res = await axios.post("http://localhost:8001/auth/signup", {
        email,
        password,
        username,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="userForm-container">
      <h1>Sign Up</h1>
      <form className="form-signup" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your name"
            required
            minLength={6}
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
        <div>
          <p>
            {" "}
            <small>Already have an account?</small>{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
