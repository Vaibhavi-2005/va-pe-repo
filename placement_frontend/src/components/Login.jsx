import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("token/login/", { username, password });
      localStorage.setItem("token", res.data.auth_token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-10 bg-gray-100 rounded shadow-md" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-5">Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 mb-3 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-3 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
