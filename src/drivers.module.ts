import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsEntitySchema } from "./adapters/out/postgres/entity-schemas/products.entity-schema";
import { ProductsDBRepository } from "./adapters/out/postgres/repositories/products.repository";
import { TransactionsDBRepository } from "./adapters/out/postgres/repositories/transactions.repository";
import { TransactionsEntitySchema } from "./adapters/out/postgres/entity-schemas/transaction.entity-schema";


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '12345',
            database: 'store',
            entities: [ProductsEntitySchema, TransactionsEntitySchema],
            synchronize: true
        }),
        TypeOrmModule.forFeature([ProductsEntitySchema, TransactionsEntitySchema])],
    providers: [ProductsDBRepository, TransactionsDBRepository],
    exports: [ProductsDBRepository, TransactionsDBRepository]
})
export class DriversModule { }