import { Module } from '@nestjs/common';
import { DriversModule } from './drivers.module';
import { ProductsModule } from './modules/products/products-domain.module';
import { ConfigModule } from '@nestjs/config';
import { TransactionsModule } from './modules/transactions/transactions-domain.module';

@Module({
  imports: [DriversModule, ProductsModule, TransactionsModule, ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
