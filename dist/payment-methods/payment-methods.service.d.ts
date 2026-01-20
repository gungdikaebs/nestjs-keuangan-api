import { PrismaService } from '../prisma/prisma.service';
export declare class PaymentMethodsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, name: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        userId: number;
        createdAt: Date;
    }, unknown> & {}>;
    findAll(userId: number): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        userId: number;
        createdAt: Date;
    }, unknown> & {})[]>;
}
