import type { Request, Response, NextFunction } from "express";

// Extend the standard Error object to include a status code
export interface ApiError extends Error {
    status?: number;
}

export const errorHandler = (
    err: ApiError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    // Log the error (optional)
    console.error(err);

    // Determine status code: default 500
    const statusCode = err.status || 500;

    // Prepare message: hide internal details for 500
    const message =
        statusCode === 500 ? "Internal Server Error" : err.message;

    // Send JSON response
    res.status(statusCode).json({ error: message });
};
