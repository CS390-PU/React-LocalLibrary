// routes/index.js
const express = require('express');
const router = express.Router();

const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

// Define /counts route
router.get('/counts', async (req, res) => {
  try {
    const bookCount = await Book.countDocuments();
    const authorCount = await Author.countDocuments();
    const genreCount = await Genre.countDocuments();
    const bookInstanceCount = await BookInstance.countDocuments();

    res.json({
      bookCount,
      authorCount,
      genreCount,
      bookInstanceCount,
      availableCopies: 0, // Optionally calculate available copies if needed
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching counts', error: err });
  }
});

module.exports = router;
