import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./authenticateClientUseCase";

export class AuthenticateClientController {
    async handle(request: Request, response: Response) {
        const authenticateClientUseCase = new AuthenticateClientUseCase();

        const { username, password } = request.body;

        const result = await authenticateClientUseCase.execute({
            username,
            password,
        });

        return response.json(result);
    }
}
