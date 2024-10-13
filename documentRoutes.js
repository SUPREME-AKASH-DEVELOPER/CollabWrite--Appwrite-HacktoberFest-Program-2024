const express = require('express');
const router = express.Router();
const { getDocuments, createDocument, updateDocument } = require('../controllers/documentController');

// Routes
router.get('/', getDocuments);
router.post('/', createDocument);
router.put('/:id', updateDocument);

module.exports = router;
