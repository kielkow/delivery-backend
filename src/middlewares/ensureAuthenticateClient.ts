import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../AppError";

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('Token missing', 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, 'b5486dcaf4cfc9c002f86209802ba582');

        console.log(sub);

        return next();
    } catch (error) {
        throw new AppError('Invalid token', 401);
    }
}
