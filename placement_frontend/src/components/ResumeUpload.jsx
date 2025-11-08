import React, { useState } from "react";
import axios from "../axios";

function ResumeUpload({ driveId }) {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Select a file first");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      await axios.patch(`students/1/`, formData, { // replace 1 with current student id
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Resume uploaded!");
    } catch (err) {
      console.log(err);
      alert("Upload failed");
    }
  };

  return (
    <form onSubmit={handleUpload} className="mt-2">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-2"
      />
      <button type="submit" className="bg-purple-500 text-white p-1 rounded">
        Upload Resume
      </button>
    </form>
  );
}

export default ResumeUpload;
