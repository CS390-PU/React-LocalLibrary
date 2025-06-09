// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Example route
// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello from Express!" });
// });

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/local_library");

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => console.log("Connected to MongoDB"));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// worked ...............
// console.log('Starting server...');

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const indexRouter = require('./routes/index');

// const app = express();

// console.log('Starting server...');

// app.use(cors());
// app.use(express.json());
// app.use('/', indexRouter);

// const mongoDB = process.env.MONGODB_URI || 'mongodb://mongo:27017/local_library';

// mongoose.connect(mongoDB)
//   .then(() => {
//     console.log('Connected to MongoDB');
// app.listen(3000, '0.0.0.0', () => {
//   console.log('Server running on port 3000');
// });

//   })
//   .catch((err) => {
//     console.error('Failed to connect to MongoDB:', err);
//   });

// changing ..................

console.log('Starting server...');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const indexRouter = require('./routes/index');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use('/', indexRouter); // Home route

// MongoDB connection string
const mongoDB =
  process.env.MONGODB_URI || 'mongodb://mongo:27017/local_library';

// Connect to MongoDB
mongoose
  .connect(mongoDB)
  .then(() => {
    console.log('Connected to MongoDB');

    // Start the server only after the MongoDB connection is successful
    app.listen(3000, '0.0.0.0', () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
