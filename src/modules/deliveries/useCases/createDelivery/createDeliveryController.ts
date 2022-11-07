import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUsecase";

export class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const createDeliveryUseCase = new CreateDeliveryUseCase();

        const { id_client } = request;
        const { item_name } = request.body;

        const result = await createDeliveryUseCase.execute({
            item_name,
            id_client,
        });

        return response.json(result);
    }
}
