import type { Request, Response, NextFunction } from "express";

export interface ApiError extends Error {
    status?: number;
}

export const errorHandler = (
    err: ApiError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.error(err);

    const statusCode = err.status || 500;

    const message =
        statusCode === 500 ? "Internal Server Error" : err.message;

    res.status(statusCode).json({ error: message });
};
