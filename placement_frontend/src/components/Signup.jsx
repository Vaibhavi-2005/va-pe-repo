import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("users/", { username, email, password, role });
      alert("Signup successful! Login now.");
      navigate("/");
    } catch (err) {
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-10 bg-gray-100 rounded shadow-md" onSubmit={handleSignup}>
        <h1 className="text-2xl font-bold mb-5">Signup</h1>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 mb-3 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-3 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-3 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          className="border p-2 mb-3 w-full"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="STUDENT">Student</option>
          <option value="HOD">HOD</option>
          <option value="TPO">TPO</option>
        </select>
        <button type="submit" className="bg-green-500 text-white p-2 w-full rounded">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
