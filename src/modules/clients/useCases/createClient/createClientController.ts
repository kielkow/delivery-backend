import { Request, Response } from "express";
import AppError from "../../../../AppError";
import { CreateClientUseCase } from "./createClientUsecase";

export class CreateClientController {
    async handle(request: Request, response: Response) {
        try {
            const createClientUseCase = new CreateClientUseCase();

            const { username, password } = request.body;
    
            const result = await createClientUseCase.execute({
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
