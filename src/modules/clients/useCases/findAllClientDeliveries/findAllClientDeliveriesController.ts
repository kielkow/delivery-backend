import { Request, Response } from "express";
import { FindAllClientDeliveriesUseCase } from "./findAllClientDeliveriesUsecase";

export class FindAllClientDeliveriesController {
    async handle(request: Request, response: Response) {
        const findAllClientDeliveriesUseCase = new FindAllClientDeliveriesUseCase();

        const { id_client } = request;

        const result = await findAllClientDeliveriesUseCase.execute(id_client);

        return response.json(result);
    }
}
