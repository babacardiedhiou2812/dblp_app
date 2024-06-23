const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConfig = require('./config/db.config.js');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const publicationRoutes = require('./routes/publication.routes');
app.use('/publications', publicationRoutes);

// Database connection
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to the database');
}).catch(err => {
  console.error('Could not connect to the database. Exiting now...', err);
  process.exit();
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
