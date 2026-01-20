import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@UseGuards(JwtAuthGuard)
@Controller('transactions')
export class TransactionsController {
    constructor(private service: TransactionsService) { }

    @Post()
    create(@Request() req, @Body() dto: CreateTransactionDto) {
        return this.service.create(req.user.sub, dto);
    }

    @Get()
    findAll(@Request() req) {
        return this.service.findAll(req.user.sub);
    }
}
