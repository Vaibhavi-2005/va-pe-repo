import React, { useEffect, useState } from "react";
import axios from "../axios";
import ResumeUpload from "./ResumeUpload";

function PlacementDrives({ userRole }) {
  const [drives, setDrives] = useState([]);

  useEffect(() => {
    axios
      .get("drives/")
      .then((res) => setDrives(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Placement Drives</h2>
      {drives.map((drive) => (
        <div key={drive.id} className="border p-4 mb-3 rounded shadow-sm">
          <h3 className="font-semibold">{drive.company.name} - {drive.company.role}</h3>
          <p>Date: {drive.date}</p>
          <p>Rounds: {JSON.stringify(drive.rounds)}</p>

          {userRole === "STUDENT" && <ResumeUpload driveId={drive.id} />}
        </div>
      ))}
    </div>
  );
}

export default PlacementDrives;
