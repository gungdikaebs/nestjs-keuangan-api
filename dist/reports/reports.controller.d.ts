import { ReportsService } from './reports.service';
export declare class ReportsController {
    private service;
    constructor(service: ReportsService);
    getSummary(req: any): Promise<{
        income: number;
        expense: number;
        balance: number;
    }>;
    getMonthly(req: any, month: string, year: string): Promise<{
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
