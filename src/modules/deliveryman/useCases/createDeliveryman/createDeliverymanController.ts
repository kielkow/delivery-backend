import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./createDeliverymanUsecase";

export class CreateDeliverymanController {
    async handle(request: Request, response: Response) {
        const createDeliverymanUseCase = new CreateDeliverymanUseCase();

        const { username, password } = request.body;

        const result = await createDeliverymanUseCase.execute({
            username,
            password,
        });

        return response.json(result);
    }
}
