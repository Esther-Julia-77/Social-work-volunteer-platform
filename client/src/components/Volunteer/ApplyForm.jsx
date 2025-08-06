import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Volunteer.css';

const ApplyForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunity: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/apply', formData);
      setSubmitted(true);
    } catch (error) {
      alert('❌ Submission failed.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Apply for Volunteering</h2>
      {submitted ? (
        <p>✅ Thank you for applying!</p>
      ) : (
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="opportunity"
            placeholder="Opportunity Name"
            value={formData.opportunity}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Application</button>
        </form>
      )}
    </div>
  );
};

export default ApplyForm;
