import { PrismaService } from '../prisma/prisma.service';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, name: string, type: 'income' | 'expense'): import(".prisma/client").Prisma.Prisma__CategoryClient<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        type: import(".prisma/client").CategoryType;
        userId: number;
        createdAt: Date;
    }, unknown> & {}, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(userId: number): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        type: import(".prisma/client").CategoryType;
        userId: number;
        createdAt: Date;
    }, unknown> & {})[]>;
}
