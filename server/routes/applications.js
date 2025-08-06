const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// GET all applications
router.get('/', async (req, res) => {
  try {
    const apps = await Application.find();
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

module.exports = router;
