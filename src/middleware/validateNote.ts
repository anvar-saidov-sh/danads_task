import type { Request, Response, NextFunction } from "express";

export const validateNote = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { title, content } = req.body;

    if (!title || typeof title !== "string") {
        return res.status(400).json({
            error: "Field 'title' is required and must be a string"
        });
    }

    if (!content || typeof content !== "string") {
        return res.status(400).json({
            error: "Field 'content' is required and must be a string"
        });
    }

    next();
};
