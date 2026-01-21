import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
export declare class TransactionsController {
    private service;
    constructor(service: TransactionsService);
    create(req: any, dto: CreateTransactionDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        amount: number;
        note: string | null;
        date: Date;
        userId: number;
        categoryId: number;
        paymentMethodId: number;
        createdAt: Date;
    }, unknown> & {}>;
    findAll(req: any): import(".prisma/client").Prisma.PrismaPromise<({
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
    }, unknown> & {})[]>;
    delete(req: any, id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        amount: number;
        note: string | null;
        date: Date;
        userId: number;
        categoryId: number;
        paymentMethodId: number;
        createdAt: Date;
    }, unknown> & {}>;
}
