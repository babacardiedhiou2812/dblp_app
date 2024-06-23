const express = require('express');
const router = express.Router();
const publicationController = require('../controllers/publication.controller');

// Get all publications
router.get('/', publicationController.getAllPublications);

// Create a new publication
router.post('/', publicationController.createPublication);

// Get a single publication by ID
router.get('/:id', publicationController.getPublicationById);

// Update a publication
router.put('/:id', publicationController.updatePublication);

// Delete a publication
router.delete('/:id', publicationController.deletePublication);

module.exports = router;
