// backend/routes/index.js
const express = require('express');
const router = express.Router();

// Welcome route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Local Library API' });
});

module.exports = router;
