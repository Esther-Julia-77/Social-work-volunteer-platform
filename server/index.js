const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const Application = require("./models/Application");

dotenv.config();
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

// ---------- MongoDB Connection ----------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ---------- AUTH ROUTES ----------

// Signup
app.post("/api/auth/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    res.json({ msg: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

// Login
// Login
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Login attempt:", email); // Debug log

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email);
      return res.status(404).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid password for user:", email);
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    res.json({
      msg: "Login successful",
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
});


// ---------- APPLICATION ROUTES ----------

// Apply for volunteer
app.post("/api/apply", async (req, res) => {
  const { name, email, opportunity } = req.body;

  try {
    const newApp = new Application({ name, email, opportunity });
    await newApp.save();
    res.json({ msg: "Application submitted!" });
  } catch (err) {
    console.error("❌ Error saving application:", err.message);
    res.status(500).json({ msg: "Failed to apply" });
  }
});

// View all applications (or filter by email if needed)
app.get("/api/applications", async (req, res) => {
  try {
    // Optional filtering by email: /api/applications?email=user@example.com
    const { email } = req.query;
    const filter = email ? { email } : {};
    const apps = await Application.find(filter);
    res.json(apps);
  } catch (err) {
    console.error("❌ Error fetching applications:", err.message);
    res.status(500).json({ msg: "Failed to fetch applications" });
  }
});

// ---------- Start Server ----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
