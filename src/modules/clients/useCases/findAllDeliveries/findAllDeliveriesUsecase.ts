import { Clients, Deliveries } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesUseCase {
    async execute(id_client: string): Promise<{ id: string; username: string; deliveries: Deliveries[]; } | null> {
        const deliveries = await prisma.clients.findUnique({ 
            where: { 
                id: id_client,
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
