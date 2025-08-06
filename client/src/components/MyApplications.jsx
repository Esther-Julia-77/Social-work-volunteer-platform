import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // import useAuth to get logged-in user
import "./MyApplications.css";

const MyApplications = () => {
  const { user } = useAuth(); // get logged-in user's email
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/applications", {
          params: { email: user?.email }, // send email to backend as query
        });
        setApplications(res.data);
      } catch (err) {
        console.error("Error fetching applications:", err);
      }
    };

    if (user?.email) fetchApplications(); // only fetch if user is logged in
  }, [user]);

  return (
    <div className="applications-container">
      <h2>📜 My Applications</h2>
      {applications.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <ul className="applications-list">
          {applications.map((app, index) => (
            <li key={index} className="application-card">
              <strong>Name:</strong> {app.name} <br />
              <strong>Email:</strong> {app.email} <br />
              <strong>Opportunity:</strong> {app.opportunity} <br />
              <strong>Applied At:</strong>{" "}
              {new Date(app.appliedAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyApplications;
