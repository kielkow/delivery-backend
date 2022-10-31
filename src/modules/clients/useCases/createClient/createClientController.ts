import { Request, Response } from "express";
import AppError from "../../../../AppError";
import { CreateClientUseCase } from "./createClientUsecase";

export class CreateClientController {
    async handle(request: Request, response: Response) {
        const createClientUseCase = new CreateClientUseCase();

        const { username, password } = request.body;

        const result = await createClientUseCase.execute({
            username,
            password,
        });

        return response.json(result);
    }
}
