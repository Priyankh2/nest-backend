// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const clubRoutes = require('./routes/clubRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const discussionRoutes = require('./routes/discussionRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/clubs', clubRoutes);
app.use('/api/meetings', meetingRoutes);
app.use('/api/discussions', discussionRoutes);
app.use('/api/notifications', notificationRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
