import { Module } from "@nestjs/common";
import { DriversModule } from "src/drivers.module";
import { WompiRepository } from "src/model/wompi/wompi.repository";
import { WompiApiService } from "src/adapters/out/http/wompi/repositories/wompi.service";
import { WompiServiceModule } from "src/adapters/out/http/wompi/wompi.module";
import { CreateCardTokenHandler } from "src/handler/cards/create-card-token.handler";
import { CreateCardTokenUseCase } from "src/domain/usecase/cards/create-card-token.usecase";
import { CardsController } from "src/adapters/in/http/cards/cards.controller";

@Module({
    imports: [DriversModule, WompiServiceModule],
    controllers: [CardsController],
    providers: [
        CreateCardTokenHandler,
        {
            provide: CreateCardTokenUseCase,
            useFactory: (repository: WompiRepository) => {
                return new CreateCardTokenUseCase(repository);
            },
            inject: [WompiApiService]
        }
    ],
    exports: [
        CreateCardTokenHandler
    ]
})
export class CardsModule { }
