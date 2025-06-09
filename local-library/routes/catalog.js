// backend/routes/catalog.js
const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const BookInstance = require('../models/bookinstance');
const Genre = require('../models/genre');
const Author = require('../models/author');

// Get list of all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find().populate('author').populate('genre');
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new book
router.post('/books', async (req, res) => {
  const { title, author, genre, isbn, summary } = req.body;
  const newBook = new Book({ title, author, genre, isbn, summary });

  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
