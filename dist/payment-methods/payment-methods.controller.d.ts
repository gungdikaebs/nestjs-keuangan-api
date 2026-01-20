import { PaymentMethodsService } from './payment-methods.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
export declare class PaymentMethodsController {
    private service;
    constructor(service: PaymentMethodsService);
    create(req: any, dto: CreatePaymentMethodDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        userId: number;
        createdAt: Date;
    }, unknown> & {}>;
    findAll(req: any): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        userId: number;
        createdAt: Date;
    }, unknown> & {})[]>;
}
