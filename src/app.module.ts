import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PaymentMethodsModule } from './payment-methods/payment-methods.module';
import { CategoriesModule } from './categories/categories.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, PaymentMethodsModule, CategoriesModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }