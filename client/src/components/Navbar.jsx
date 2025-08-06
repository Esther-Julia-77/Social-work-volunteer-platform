import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">🌱 NGO Platform</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/volunteers">Volunteers</Link>
        {user && <Link to="/my-applications">My Applications</Link>}
        {!user ? (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/profile">My Profile</Link>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

