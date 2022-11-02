import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import AppError from "../../../../AppError";
import { prisma } from "../../../../database/prismaClient";

interface IAuthenticateDeliverymanRequest {
    username: string;
    password: string;
}

interface IAuthenticateDeliverymanResponse {
    token: string;
}

export class AuthenticateDeliverymanUseCase {
    async execute({ username, password }: IAuthenticateDeliverymanRequest): Promise<IAuthenticateDeliverymanResponse> {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        });

        if (!deliveryman) throw new AppError('Deliveryman does not exists', 400);

        const passwordMatch = await compare(password, deliveryman.password);

        if (!passwordMatch) throw new AppError('Password invalid', 400);

        const token = sign(
            { username },
            'b5486dcaf4cfc9c003f86209802ba582',
            {
                subject: deliveryman.id,
                expiresIn: '1d',
            },
        );

        return {
            token
        };
    }
}
