import { Deliveries } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliverymanDeliveriesUseCase {
    async execute(id_deliveryman: string): Promise<{ id: string; username: string; deliveries: Deliveries[]; } | null> {
        const deliveries = await prisma.deliveryman.findUnique({
            where: {
                id: id_deliveryman,
            },
            select: {
                id: true,
                username: true,
                deliveries: true,
            },
        });

        return deliveries;
    }
}
