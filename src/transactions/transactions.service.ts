import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
    constructor(private prisma: PrismaService) { }

    async create(userId: number, dto: CreateTransactionDto) {

        // VALIDASI CATEGORY MILIK USER
        const category = await this.prisma.category.findFirst({
            where: {
                id: dto.categoryId,
                userId,
            },
        });

        if (!category) {
            throw new NotFoundException('Category not found');
        }

        // VALIDASI PAYMENT METHOD MILIK USER
        const paymentMethod = await this.prisma.paymentMethod.findFirst({
            where: {
                id: dto.paymentMethodId,
                userId,
            },
        });

        if (!paymentMethod) {
            throw new NotFoundException('Payment method not found');
        }

        return this.prisma.transaction.create({
            data: {
                amount: dto.amount,
                date: new Date(dto.date),
                note: dto.note,
                userId,
                categoryId: dto.categoryId,
                paymentMethodId: dto.paymentMethodId,
            },
        });
    }

    findAll(userId: number) {
        return this.prisma.transaction.findMany({
            where: { userId },
            include: {
                category: true,
                paymentMethod: true,
            },
            orderBy: {
                date: 'desc',
            },
        });
    }
}
