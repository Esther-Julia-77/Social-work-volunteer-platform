import React from "react";
import "./Volunteer.css";

const VolunteerCard = ({ opportunity, onApply }) => (
  <div className="volunteer-card">
    <h3>{opportunity.title}</h3>
    <p>{opportunity.description}</p>
    <p><strong>Location:</strong> {opportunity.location}</p>
    <button onClick={() => onApply(opportunity)}>Apply</button>
  </div>
);

export default VolunteerCard;
