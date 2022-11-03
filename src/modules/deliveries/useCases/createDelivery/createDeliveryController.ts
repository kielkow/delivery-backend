import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUsecase";

export class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const createDeliveryUseCase = new CreateDeliveryUseCase();

        const { item_name, id_client } = request.body;

        const result = await createDeliveryUseCase.execute({
            item_name,
            id_client,
        });

        return response.json(result);
    }
}
