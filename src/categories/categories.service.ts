import { Injectable } from '@nestjs/common';
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
}
