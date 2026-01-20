import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesController {
    private service;
    constructor(service: CategoriesService);
    create(req: any, dto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        type: import(".prisma/client").CategoryType;
        userId: number;
        createdAt: Date;
    }, unknown> & {}, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(req: any): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        type: import(".prisma/client").CategoryType;
        userId: number;
        createdAt: Date;
    }, unknown> & {})[]>;
}
