import { PrismaService } from '../prisma/prisma.service';
export declare class ReportsService {
    private prisma;
    constructor(prisma: PrismaService);
    getSummary(userId: number): Promise<{
        income: number;
        expense: number;
        balance: number;
    }>;
    getMonthly(userId: number, month: number, year: number): Promise<{
        month: number;
        year: number;
        income: number;
        expense: number;
        balance: number;
        transactions: ({
            category: import("@prisma/client/runtime/library").GetResult<{
                id: number;
                name: string;
                type: import(".prisma/client").CategoryType;
                userId: number;
                createdAt: Date;
                deletedAt: Date | null;
            }, unknown> & {};
            paymentMethod: import("@prisma/client/runtime/library").GetResult<{
                id: number;
                name: string;
                userId: number;
                createdAt: Date;
            }, unknown> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: number;
            amount: number;
            note: string | null;
            date: Date;
            userId: number;
            categoryId: number;
            paymentMethodId: number;
            createdAt: Date;
        }, unknown> & {})[];
    }>;
}
