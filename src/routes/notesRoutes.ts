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


router.get("/", getAllNotes);

router.get("/:id", getNoteById);


router.post("/", validateNote, createNote);


router.put("/:id", validateNote, updateNote);


router.delete("/:id", deleteNote);

export default router;