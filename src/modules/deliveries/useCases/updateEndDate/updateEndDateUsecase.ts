import { Prisma } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";

interface IUpdateDelivery {
    id_delivery: string;
    id_deliveryman: string;
}

export class UpdateEndDateUseCase {
    async execute({ id_delivery, id_deliveryman }: IUpdateDelivery): Promise<Prisma.BatchPayload> {
        const delivery = await prisma.deliveries.updateMany({
            where: {
                id: id_delivery,
                id_deliveryman,
            },
            data: {
                end_at: new Date()
            }
        });

        return delivery;
    }
}
