import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    try {
      const res = await axios.post("http://localhost:8001/auth/signin", {
        email,
        password,
      },{
        withCredentials:true
      });
      console.log(res.data.token);
    
      if (res.status === 200) navigate("/home");
      else navigate("/signup");
    } catch (e: any) {
      if (e.response.status === 404) {
        console.log("user doesn't exist");
        navigate("/signup");
      } else if (e.response.status === 401) {
        console.log("invalid email or password");
      } else {
        console.log("internal server error");
      }
    }
  };

  return (
    <div className="userForm-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form-signup">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div>
          <p>
            {" "}
            <small>Don't have an account?</small>{" "}
            <Link to="/signup">SignUp</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
