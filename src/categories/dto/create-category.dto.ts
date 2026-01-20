import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEnum(['income', 'expense'])
    type: 'income' | 'expense';
}
