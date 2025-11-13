import React, { useState } from "react";
import API from "../services/api";
import Dashboard from "../pages/Dashboard"; // import the new page

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", credentials, {
        headers: { "Content-Type": "application/json" },
      });
      localStorage.setItem("token", res.data.access_token);
      setMessage("✅ Login successful!");
      setLoggedIn(true);
    } catch (error) {
      setMessage("❌ " + (error.response?.data?.detail || "Login failed"));
    }
  };

  if (loggedIn) {
    return <Dashboard />; // show dashboard after login success
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default LoginForm;
