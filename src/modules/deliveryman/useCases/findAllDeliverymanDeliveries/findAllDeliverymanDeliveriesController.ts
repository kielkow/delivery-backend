import { Request, Response } from "express";
import { FindAllDeliverymanDeliveriesUseCase } from "./findAllDeliverymanDeliveriesUsecase";

export class FindAllDeliverymanDeliveriesController {
    async handle(request: Request, response: Response) {
        const findAllDeliverymanDeliveriesUseCase = new FindAllDeliverymanDeliveriesUseCase();

        const { id_deliveryman } = request;

        const result = await findAllDeliverymanDeliveriesUseCase.execute(id_deliveryman);

        return response.json(result);
    }
}
