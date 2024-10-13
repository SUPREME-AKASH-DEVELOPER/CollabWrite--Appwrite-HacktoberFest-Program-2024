const express = require('express');
const mongoose = require('mongoose');
const documentRoutes = require('./routes/documentRoutes');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/documents', documentRoutes);

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
