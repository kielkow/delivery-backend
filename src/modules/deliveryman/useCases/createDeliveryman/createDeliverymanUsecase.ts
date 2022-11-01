import { Deliveryman } from "@prisma/client";
import { hash } from "bcrypt";
import AppError from "../../../../AppError";
import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryman {
    username: string;
    password: string;
}

export class CreateDeliverymanUseCase {
    async execute({ username, password }: ICreateDeliveryman): Promise<Deliveryman> {
        const deliverymanExists = await prisma.deliveryman.findFirst({ 
            where: { 
                username: {
                    equals: username,
                    mode: 'insensitive',
                },
            },
        });

        if (deliverymanExists) throw new AppError('Deliveryman already exists', 400);

        const hashPassword = await hash(password, 10);

        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword,
            },
        });

        return deliveryman;
    }
}
