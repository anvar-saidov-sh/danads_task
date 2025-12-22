import { Router } from "express";
import {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from "../controllers/notesController.js";
import { validateNote } from "../middleware/validateNote.js";

const router = Router();

// GET /notes
router.get("/", getAllNotes);

// GET /notes/:id
router.get("/:id", getNoteById);

// POST /notes
router.post("/create", validateNote, createNote);

// PUT /notes/:id
router.put("/:id", validateNote, updateNote);

// DELETE /notes/:id
router.delete("/:id", deleteNote);

export default router;