import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VolunteerCard from "./VolunteerCard";
import "./Volunteer.css";

const VolunteerList = () => {
  const navigate = useNavigate();

  const [opportunities] = useState([
    { id: 1, title: "Teach Underprivileged Children", description: "Help children with basic education and computer skills.", location: "Chennai, Tamil Nadu" },
    { id: 2, title: "Beach Clean-up Drive", description: "Join a mission to clean beaches and promote cleanliness.", location: "Chennai, Tamil Nadu" },
    { id: 3, title: "Tree Plantation Program", description: "Plant trees to promote greenery in urban areas.", location: "Coimbatore, Tamil Nadu" },
    { id: 4, title: "Old Age Home Care", description: "Spend time and assist elderly people in old age homes.", location: "Madurai, Tamil Nadu" },
    { id: 5, title: "Medical Camp Volunteer", description: "Assist medical professionals in free health check-up camps.", location: "Tiruchirappalli, Tamil Nadu" },
    { id: 6, title: "Blood Donation Camp", description: "Organize and help in managing blood donation events.", location: "Salem, Tamil Nadu" },
    { id: 7, title: "Skill Training for Women", description: "Teach tailoring, craft, and basic tech skills to women.", location: "Erode, Tamil Nadu" },
    { id: 8, title: "Animal Shelter Support", description: "Assist in caring for rescued animals at shelters.", location: "Vellore, Tamil Nadu" },
    { id: 9, title: "Community Kitchen Help", description: "Distribute food to underprivileged people.", location: "Tirunelveli, Tamil Nadu" },
    { id: 10, title: "Sanitation Awareness Campaign", description: "Create awareness on hygiene and cleanliness.", location: "Thanjavur, Tamil Nadu" },
    { id: 11, title: "Library Organizer", description: "Help manage and organize community libraries.", location: "Dindigul, Tamil Nadu" },
    { id: 12, title: "Orphanage Tutor", description: "Teach and support children in orphanages.", location: "Karur, Tamil Nadu" },
    { id: 13, title: "Disaster Relief Support", description: "Provide aid and distribute essentials during calamities.", location: "Nagapattinam, Tamil Nadu" },
    { id: 14, title: "Rural School Renovation", description: "Paint and repair infrastructure in village schools.", location: "Krishnagiri, Tamil Nadu" },
    { id: 15, title: "Wildlife Awareness Program", description: "Participate in events promoting wildlife protection.", location: "Ooty, Tamil Nadu" },
    { id: 16, title: "Free Coding Camp", description: "Teach basic coding to school students.", location: "Namakkal, Tamil Nadu" },
    { id: 17, title: "Women’s Health Workshop", description: "Organize events focusing on menstrual hygiene.", location: "Thoothukudi, Tamil Nadu" },
    { id: 18, title: "Senior Citizen Tech Help", description: "Teach senior citizens how to use smartphones and apps.", location: "Kanchipuram, Tamil Nadu" },
    { id: 19, title: "Art for Awareness", description: "Create posters and murals on social issues.", location: "Pudukkottai, Tamil Nadu" },
    { id: 20, title: "Green Roof Gardening", description: "Help create rooftop gardens for local communities.", location: "Villupuram, Tamil Nadu" }
  ]);

  const handleApply = (opportunity) => {
    navigate(`/apply/${opportunity.id}`);
  };

  return (
    <div className="volunteer-list">
      <h2>Available Volunteering Opportunities</h2>
      <div className="volunteer-cards-container">
        {opportunities.map((op) => (
          <VolunteerCard
            key={op.id}
            opportunity={op}
            onApply={handleApply}
          />
        ))}
      </div>
    </div>
  );
};

export default VolunteerList;
