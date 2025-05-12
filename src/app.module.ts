import { Module } from '@nestjs/common';
import { DriversModule } from './drivers.module';
import { ProductsModule } from './modules/products/products-domain.module';
import { ConfigModule } from '@nestjs/config';
import { TransactionsModule } from './modules/transactions/transactions-domain.module';
import { CardsModule } from './modules/cards/cards.module';

@Module({
  imports: [DriversModule, ProductsModule, TransactionsModule, CardsModule, ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
