const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  type: { type: String, enum: ['Article', 'Conference', 'Book'], required: true },
  title: { type: String, required: true },
  pages: { type: Object },  // Adjust this if you have a specific structure for pages
  year: { type: Number, required: true },
  booktitle: { type: String },
  url: { type: String },
  authors: [{ type: String, required: true }]  // Authors are kept as an array of strings
});

module.exports = mongoose.model('Publication', publicationSchema);
