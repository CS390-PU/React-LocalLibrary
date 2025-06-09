// backend/models/BookInstance.js
const mongoose = require('mongoose');
const Book = require('./book');

const bookInstanceSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  imprint: { type: String },
  status: {
    type: String,
    enum: ['Available', 'Loaned', 'Reserved', 'Maintenance'],
    default: 'Available',
  },
  dueBack: { type: Date },
});

const BookInstance = mongoose.model('BookInstance', bookInstanceSchema);

module.exports = BookInstance;
