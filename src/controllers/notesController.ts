import type { Request, Response, NextFunction } from "express";
import { v4 as uuid } from "uuid";
import { notes } from "../data/notesStore.js";
import type { Note } from "../models/Note.js";
import type { ApiError } from "../middleware/errorHandler.js";

/**
 * GET /notes
 */
export const getAllNotes = (_req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json(notes);
    } catch (err) {
        next(err);
    }
};

/**
 * GET /notes/:id
 */
export const getNoteById = (req: Request, res: Response, next: NextFunction) => {
    try {
        const note = notes.find(n => n.id === req.params.id);

        if (!note) {
            const err = new Error("Note not found") as ApiError;
            err.status = 404;
            throw err;
        }

        res.status(200).json(note);
    } catch (err) {
        next(err);
    }
};

/**
 * POST /notes
 */
export const createNote = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            const err = new Error("Title and content are required") as ApiError;
            err.status = 400;
            throw err;
        }

        const newNote: Note = {
            id: uuid(),
            title,
            content,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        notes.push(newNote);

        res.status(201).json(newNote);
    } catch (err) {
        next(err);
    }
};

/**
 * PUT /notes/:id
 */
export const updateNote = (req: Request, res: Response, next: NextFunction) => {
    try {
        const note = notes.find(n => n.id === req.params.id);

        if (!note) {
            const err = new Error("Note not found") as ApiError;
            err.status = 404;
            throw err;
        }

        const { title, content } = req.body;

        if (!title || !content) {
            const err = new Error("Title and content are required") as ApiError;
            err.status = 400;
            throw err;
        }

        note.title = title;
        note.content = content;

        res.status(200).json(note);
    } catch (err) {
        next(err);
    }
};

/**
 * DELETE /notes/:id
 */
export const deleteNote = (req: Request, res: Response, next: NextFunction) => {
    try {
        const index = notes.findIndex(n => n.id === req.params.id);

        if (index === -1) {
            const err = new Error("Note not found") as ApiError;
            err.status = 404;
            throw err;
        }

        notes.splice(index, 1);

        res.status(204).send();
    } catch (err) {
        next(err);
    }
};
