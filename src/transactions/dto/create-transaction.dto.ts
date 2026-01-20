import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTransactionDto {
    @IsInt()
    amount: number;

    @IsInt()
    categoryId: number;

    @IsInt()
    paymentMethodId: number;

    @IsNotEmpty()
    date: string;

    @IsOptional()
    note?: string;
}
