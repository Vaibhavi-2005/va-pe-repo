import React, { useEffect, useState } from "react";
import axios from "../axios";
import PlacementDrives from "./PlacementDrives";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    } else {
      axios
        .get("users/") // Adjust to your backend endpoint for current user
        .then((res) => setUser(res.data[0])) // Just an example
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Welcome, {user?.username}</h1>
      <p className="mb-5">Role: {user?.role}</p>

      <PlacementDrives userRole={user?.role} />
    </div>
  );
}

export default Dashboard;
