import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import AppError from "../../../../AppError";
import { prisma } from "../../../../database/prismaClient";

interface IAuthenticateClientRequest {
    username: string;
    password: string;
}

interface IAuthenticateClientResponse {
    token: string;
}

export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticateClientRequest): Promise<IAuthenticateClientResponse> {
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        });

        if (!client) throw new AppError('Client does not exists', 400);

        const passwordMatch = await compare(password, client.password);

        if (!passwordMatch) throw new AppError('Password invalid', 400);

        const token = sign(
            { username },
            'b5486dcaf4cfc9c002f86209802ba582',
            {
                subject: client.id,
                expiresIn: '1d',
            },
        );

        return {
            token
        };
    }
}
