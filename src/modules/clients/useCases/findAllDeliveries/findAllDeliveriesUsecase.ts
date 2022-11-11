import { Clients, Deliveries } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesUseCase {
    async execute(id_client: string): Promise<(Clients & { deliveries: Deliveries[]; }) | null> {
        const deliveries = await prisma.clients.findUnique({ 
            where: { 
                id: id_client,
            },
            include: {
                deliveries: true
            },
        });

        return deliveries;
    }
}
