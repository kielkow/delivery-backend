import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./updateEndDateUsecase";

export class UpdateEndDateController {
    async handle(request: Request, response: Response) {
        const updateEndDateUseCase = new UpdateEndDateUseCase();

        const { id_deliveryman } = request;
        const { id_delivery } = request.params;

        const result = await updateEndDateUseCase.execute({
            id_delivery,
            id_deliveryman,
        });

        return response.json(result);
    }
}
