import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./findAllDeliveriesUsecase";

export class FindAllDeliveriesController {
    async handle(request: Request, response: Response) {
        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

        const { id_client } = request;

        const result = await findAllDeliveriesUseCase.execute(id_client);

        return response.json(result);
    }
}
