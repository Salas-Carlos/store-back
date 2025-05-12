import { Module } from "@nestjs/common";
import { DriversModule } from "src/drivers.module";
import { TransactionsController } from "src/adapters/in/http/transactions/transactions.controller";
import { CreateTransactionHandler } from "src/handler/transactions/create-transactions.handler";
import { CreateTransactionUseCase } from "src/domain/usecase/transactions/create-transactions.usecase";
import { WompiRepository } from "src/model/wompi/wompi.repository";
import { WompiApiService } from "src/adapters/out/http/wompi/repositories/wompi.service";
import { WompiServiceModule } from "src/adapters/out/http/wompi/wompi.module";
import { ConfigService } from "@nestjs/config";
import { TransactionsRepository } from "src/model/transactions/transactions.repository";
import { TransactionsDBRepository } from "src/adapters/out/postgres/repositories/transactions.repository";
import { GetTransactionByIdHandler } from "src/handler/transactions/get-transaction-by-id.handler";
import { GetTransactionByIdUseCase } from "src/domain/usecase/transactions/get-transaction-by-id.usecase";
import { ProductsRepository } from "src/model/products/produts.repository";
import { ProductsDBRepository } from "src/adapters/out/postgres/repositories/products.repository";

@Module({
    imports: [DriversModule, WompiServiceModule],
    controllers: [TransactionsController],
    providers: [CreateTransactionHandler,
        {
            provide: CreateTransactionUseCase,
            useFactory: (wompiRepository: WompiRepository, configService: ConfigService, transactionsRepository: TransactionsRepository, productsRepository: ProductsRepository) => {
                return new CreateTransactionUseCase(wompiRepository, configService, transactionsRepository, productsRepository);
            },
            inject: [WompiApiService, ConfigService, TransactionsDBRepository, ProductsDBRepository]
        },
        GetTransactionByIdHandler,
        {
            provide: GetTransactionByIdUseCase,
            useFactory: (transactionsRepository: TransactionsRepository, wompiRepository: WompiRepository, productsRepository: ProductsRepository) => {
                return new GetTransactionByIdUseCase(transactionsRepository, wompiRepository, productsRepository);
            },
            inject: [TransactionsDBRepository, WompiApiService, ProductsDBRepository]
        },
    ],
    exports: [CreateTransactionHandler]
})
export class TransactionsModule { }
