import type { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { notes } from "../data/notesStore.js";
import type { Note } from "../models/Note.js";

/**
 * GET /notes
 */
export const getAllNotes = (_req: Request, res: Response) => {
    res.status(200).json(notes);
};

/**
 * GET /notes/:id
 */
export const getNoteById = (req: Request, res: Response) => {
    const note = notes.find(n => n.id === req.params.id);

    if (!note) {
        return res.status(404).json({
            error: "Note not found"
        });
    }

    res.status(200).json(note);
};

/**
 * POST /notes
 */
export const createNote = (req: Request, res: Response) => {
    const newNote: Note = {
        id: uuid(),
        title: req.body.title,
        content: req.body.content,
        createdAt: new Date()
    };

    notes.push(newNote);

    res.status(201).json(newNote);
};

/**
 * PUT /notes/:id
 */
export const updateNote = (req: Request, res: Response) => {
    const note = notes.find(n => n.id === req.params.id);

    if (!note) {
        return res.status(404).json({
            error: "Note not found"
        });
    }

    note.title = req.body.title;
    note.content = req.body.content;

    res.status(200).json(note);
};

/**
 * DELETE /notes/:id
 */
export const deleteNote = (req: Request, res: Response) => {
    const index = notes.findIndex(n => n.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({
            error: "Note not found"
        });
    }

    notes.splice(index, 1);

    res.status(204).send();
};