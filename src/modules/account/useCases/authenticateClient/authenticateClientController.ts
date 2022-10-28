import { Request, Response } from "express";
import AppError from "../../../../AppError";
import { AuthenticateClientUseCase } from "./authenticateClientUseCase";

export class AuthenticateClientController {
    async handle(request: Request, response: Response) {
        try {
            const authenticateClientUseCase = new AuthenticateClientUseCase();

            const { username, password } = request.body;
    
            const result = await authenticateClientUseCase.execute({
                username,
                password,
            });
    
            return response.json(result);
        } 
        catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ message: error.message });
            }

            if (error instanceof Error) {
                return response.status(500).json({ message: error.message });
            }

            return response.status(500).json({ message: error });
        }
    }
}
