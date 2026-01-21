import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
    constructor(private prisma: PrismaService) { }

    async getSummary(userId: number) {
        const transactions = await this.prisma.transaction.findMany({
            where: { userId },
            include: {
                category: true,
            },
        });

        let income = 0;
        let expense = 0;

        for (const trx of transactions) {
            if (trx.category.type === 'income') {
                income += trx.amount;
            } else {
                expense += trx.amount;
            }
        }

        return {
            income,
            expense,
            balance: income - expense,
        };
    }
    async getMonthly(
        userId: number,
        month: number,
        year: number,
    ) {
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0, 23, 59, 59);

        const transactions = await this.prisma.transaction.findMany({
            where: {
                userId,
                date: {
                    gte: startDate,
                    lte: endDate,
                },
            },
            include: {
                category: true,
                paymentMethod: true,
            },
            orderBy: {
                date: 'desc',
            },
        });

        let income = 0;
        let expense = 0;

        for (const trx of transactions) {
            if (trx.category.type === 'income') {
                income += trx.amount;
            } else {
                expense += trx.amount;
            }
        }

        return {
            month,
            year,
            income,
            expense,
            balance: income - expense,
            transactions,
        };
    }

}
