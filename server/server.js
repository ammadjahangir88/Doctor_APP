import express from "express";
import dotenv from "dotenv";
import './db/connection.js';  // Ensures DB is connected before starting the server

dotenv.config();  // Initialize dotenv to load environment variables

// Initialize Express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Importing routes
import UserRoutes from './routes/UserRoutes.js';

// Routes setup
app.use(UserRoutes);
app.get("/", (req, res) => {
    res.json("Hello World!");
});

// Set port from environment with a default value
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
