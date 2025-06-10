// const express = require('express');
// const router = express.Router();
// const Book = require('../models/book');
// const Author = require('../models/author');
// const Genre = require('../models/genre');
// const BookInstance = require('../models/bookinstance');

// router.get('/', async (req, res) => {
//   try {
//     const [
//       bookCount,
//       bookInstanceCount,
//       bookInstanceAvailableCount,
//       authorCount,
//       genreCount,
//     ] = await Promise.all([
//       Book.countDocuments(),
//       BookInstance.countDocuments(),
//       BookInstance.countDocuments({ status: 'Available' }),
//       Author.countDocuments(),
//       Genre.countDocuments(),
//     ]);

//     res.json({
//       bookCount,
//       bookInstanceCount,
//       bookInstanceAvailableCount,
//       authorCount,
//       genreCount,
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching library data', error: err });
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.json({ message: 'Hello from Local Library API' });
// });

// module.exports = router;


// Assuming you have models like Book, Author, Genre, and BookInstance
// Example backend route (in your Express server)
const express = require('express');
const router = express.Router();

const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

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
      availableCopies: 0 // You can calculate availableCopies if needed
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching counts', error: err });
  }
});

module.exports = router;

