import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsEntitySchema } from "./adapters/out/postgres/entity-schemas/products.entity-schema";
import { ProductsDBRepository } from "./adapters/out/postgres/repositories/products.repository";


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '12345',
            database: 'store',
            entities: [ProductsEntitySchema],
            synchronize: true
        }),
        TypeOrmModule.forFeature([ProductsEntitySchema])],
    providers: [ProductsDBRepository],
    exports: [ProductsDBRepository]
})
export class DriversModule { }