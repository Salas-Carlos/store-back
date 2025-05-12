import { Module } from "@nestjs/common";
import { ProductsController } from "src/adapters/in/http/products/products.controller";
import { ProductsDBRepository } from "src/adapters/out/postgres/repositories/products.repository";
import { GetAllProductsUseCase } from "src/domain/usecase/products/get-all-products.usecase";
import { DriversModule } from "src/drivers.module";
import { GetAllProductsHandler } from "src/handler/products/get-all-products.handler";
import { ProductsRepository } from '../../model/products/produts.repository';

@Module({
    imports: [DriversModule],
    controllers: [ProductsController],
    providers: [GetAllProductsHandler,
        {
            provide: GetAllProductsUseCase,
            useFactory: (repository: ProductsRepository) => {
                return new GetAllProductsUseCase(repository);
            },
            inject: [ProductsDBRepository]
        }
    ],
    exports: [GetAllProductsHandler]
})
export class ProductsModule { }
