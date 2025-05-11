import { Module } from "@nestjs/common";
import { ProductsController } from "src/adapters/in/http/products/products.controller";
import { ProductsDBRepository } from "src/adapters/out/postgres/repositories/products.repository";
import { GetAllProductsUseCase } from "src/domain/usecase/products/get-all-products.usecase";
import { DriversModule } from "src/drivers.module";
import { GetAllProductsHandler } from "src/handler/products/get-all-products.handler";
import { ProductsRepository } from '../../model/products/procuts.repository';
import { TransactionsController } from "src/adapters/in/http/transactions/transactions.controller";
import { CreateTransactionHandler } from "src/handler/transactions/create-transactions.handler";

@Module({
    imports: [DriversModule],
    controllers: [TransactionsController],
    providers: [CreateTransactionHandler,
        /*  {
             provide: GetAllProductsUseCase,
             useFactory: (repository: ProductsRepository) => {
                 return new GetAllProductsUseCase(repository);
             },
             inject: [ProductsDBRepository]
         } */
    ],
    exports: [CreateTransactionHandler]
})
export class TransactionsModule { }
