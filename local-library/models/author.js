// backend/models/Author.js
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date },
  dateOfDeath: { type: Date },
  biography: { type: String },
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
