// backend/models/Book.js
const mongoose = require('mongoose');
const Author = require('./author');
const Genre = require('./genre');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true },
  summary: { type: String },
  isbn: { type: String, required: true },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
