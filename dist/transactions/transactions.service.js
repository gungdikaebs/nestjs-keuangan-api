"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TransactionsService = class TransactionsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        const category = await this.prisma.category.findFirst({
            where: {
                id: dto.categoryId,
                userId,
            },
        });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        const paymentMethod = await this.prisma.paymentMethod.findFirst({
            where: {
                id: dto.paymentMethodId,
                userId,
            },
        });
        if (!paymentMethod) {
            throw new common_1.NotFoundException('Payment method not found');
        }
        return this.prisma.transaction.create({
            data: {
                amount: dto.amount,
                date: new Date(dto.date),
                note: dto.note,
                userId,
                categoryId: dto.categoryId,
                paymentMethodId: dto.paymentMethodId,
            },
        });
    }
    findAll(userId) {
        return this.prisma.transaction.findMany({
            where: { userId },
            include: {
                category: true,
                paymentMethod: true,
            },
            orderBy: {
                date: 'desc',
            },
        });
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map