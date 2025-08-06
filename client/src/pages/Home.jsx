import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Banner */}
      <section className="hero">
        <h1>Be the Change You Wish to See</h1>
        <p>Join our mission to uplift communities and build a better future through volunteering.</p>
        <button onClick={() => navigate("/volunteers")}>Explore Opportunities</button>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Sign Up</h3>
            <p>Create your account and become part of our volunteer network.</p>
          </div>
          <div className="step">
            <h3>2. Explore</h3>
            <p>Browse opportunities that match your interest and location.</p>
          </div>
          <div className="step">
            <h3>3. Make Impact</h3>
            <p>Join hands and bring positive change to society.</p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact">
        <h2>Our Impact</h2>
        <div className="stats">
          <div>
            <h3>2000+</h3>
            <p>Volunteers</p>
          </div>
          <div>
            <h3>150+</h3>
            <p>NGO Partnerships</p>
          </div>
          <div>
            <h3>5000+</h3>
            <p>Lives Touched</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
