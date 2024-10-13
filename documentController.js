const Document = require('../models/Document');

// Get all documents
const getDocuments = async (req, res) => {
    try {
        const documents = await Document.find();
        res.json(documents);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create new document
const createDocument = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newDocument = new Document({
            title,
            content,
            collaborators: []
        });
        await newDocument.save();
        res.status(201).json(newDocument);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update document content
const updateDocument = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
        const document = await Document.findById(id);
        document.content = content;
        document.lastModified = Date.now();
        document.version += 1;
        await document.save();
        res.json(document);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getDocuments,
    createDocument,
    updateDocument
};
