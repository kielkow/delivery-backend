import { Clients } from "@prisma/client";
import { hash } from "bcrypt";
import AppError from "../../../../AppError";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
    username: string;
    password: string;
}

export class CreateClientUseCase {
    async execute({ username, password }: ICreateClient): Promise<Clients> {
        const clientExists = await prisma.clients.findFirst({ 
            where: { 
                username: {
                    equals: username,
                    mode: 'insensitive',
                },
            },
        });

        if (clientExists) throw new AppError('Client already exists', 400);

        const hashPassword = await hash(password, 10);

        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword,
            },
        });

        return client;
    }
}
