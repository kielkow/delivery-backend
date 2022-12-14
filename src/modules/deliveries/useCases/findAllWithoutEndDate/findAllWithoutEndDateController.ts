import { Request, Response } from "express";
import { FindAllWithoutEndDateUseCase } from "./findAllWithoutEndDateUsecase";

export class FindAllWithoutEndDateController {
    async handle(request: Request, response: Response) {
        const findAllWithoutEndDateUseCase = new FindAllWithoutEndDateUseCase();

        const result = await findAllWithoutEndDateUseCase.execute();

        return response.json(result);
    }
}
