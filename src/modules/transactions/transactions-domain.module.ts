import { Module } from "@nestjs/common";
import { DriversModule } from "src/drivers.module";
import { TransactionsController } from "src/adapters/in/http/transactions/transactions.controller";
import { CreateTransactionHandler } from "src/handler/transactions/create-transactions.handler";
import { CreateTransactionUseCase } from "src/domain/usecase/transactions/create-transactions.usecase";
import { WompiRepository } from "src/model/wompi/wompi.repository";
import { WompiApiService } from "src/adapters/out/http/wompi/repositories/wompi.service";
import { WompiServiceModule } from "src/adapters/out/http/wompi/wompi.module";

@Module({
    imports: [DriversModule, WompiServiceModule],
    controllers: [TransactionsController],
    providers: [CreateTransactionHandler,
        {
            provide: CreateTransactionUseCase,
            useFactory: (repository: WompiRepository) => {
                return new CreateTransactionUseCase(repository);
            },
            inject: [WompiApiService]
        }
    ],
    exports: [CreateTransactionHandler]
})
export class TransactionsModule { }
