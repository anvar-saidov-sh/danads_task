import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/notes", notesRoutes);

// 404 handler for unknown routes
app.use((_req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});