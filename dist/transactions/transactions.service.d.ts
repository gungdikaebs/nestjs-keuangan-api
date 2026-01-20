import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
export declare class TransactionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, dto: CreateTransactionDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        amount: number;
        note: string | null;
        date: Date;
        userId: number;
        categoryId: number;
        paymentMethodId: number;
        createdAt: Date;
    }, unknown> & {}>;
    findAll(userId: number): import(".prisma/client").Prisma.PrismaPromise<({
        category: import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            type: import(".prisma/client").CategoryType;
            userId: number;
            createdAt: Date;
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
    }, unknown> & {})[]>;
}
