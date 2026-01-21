import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) { }

    create(userId: number, name: string, type: 'income' | 'expense') {
        return this.prisma.category.create({
            data: {
                name,
                type,
                userId,
            },
        });
    }

    findAll(userId: number) {
        return this.prisma.category.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }

    async delete(userId: number, categoryId: number) {

        const category = await this.prisma.category.findFirst({
            where: {
                id: categoryId,
                userId,
            },
        });

        if (!category) {
            throw new NotFoundException('Category not found');
        }

        const used = await this.prisma.transaction.count({
            where: {
                categoryId,
                userId,
            },
        });

        if (used > 0) {
            throw new BadRequestException(
                'Category is used in transactions',
            );
        }

        return this.prisma.category.delete({
            where: {
                id: categoryId,
            },
        });
    }
}


