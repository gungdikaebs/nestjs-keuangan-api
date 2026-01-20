import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentMethodsService {
    constructor(private prisma: PrismaService) { }

    async create(userId: number, name: string) {
        return this.prisma.paymentMethod.create({
            data: {
                name,
                userId,
            },
        });
    }

    async findAll(userId: number) {
        return this.prisma.paymentMethod.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
}
