import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./updateDeliverymanUsecase";

export class UpdateDeliverymanController {
    async handle(request: Request, response: Response) {
        const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

        const { id_deliveryman } = request;
        const { id_delivery } = request.params;

        const result = await updateDeliverymanUseCase.execute({
            id_delivery, id_deliveryman
        });

        return response.json(result);
    }
}
