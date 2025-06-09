// backend/routes/users.js
const express = require('express');
const router = express.Router();

// Placeholder user route (can be extended for user auth functionality)
router.get('/users', (req, res) => {
  res.json({ message: 'User routes coming soon' });
});

module.exports = router;
