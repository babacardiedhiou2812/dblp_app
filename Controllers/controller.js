const Publication = require('../models/publication.models');

// Get all publications
exports.getAllPublications = async (req, res) => {
  try {
    const publications = await Publication.find();
    res.json(publications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new publication
exports.createPublication = async (req, res) => {
  const publication = new Publication(req.body);
  try {
    const newPublication = await publication.save();
    res.status(201).json(newPublication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a single publication by ID
exports.getPublicationById = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    if (!publication) {
      return res.status(404).json({ message: 'Publication not found' });
    }
    res.json(publication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a publication
exports.updatePublication = async (req, res) => {
  try {
    const publication = await Publication.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!publication) {
      return res.status(404).json({ message: 'Publication not found' });
    }
    res.json(publication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a publication
exports.deletePublication = async (req, res) => {
  try {
    const publication = await Publication.findByIdAndDelete(req.params.id);
    if (!publication) {
      return res.status(404).json({ message: 'Publication not found' });
    }
    res.json({ message: 'Publication deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
