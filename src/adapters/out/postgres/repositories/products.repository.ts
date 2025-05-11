import { Products } from '../../../../model/products/products.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductsEntitySchema } from "../entity-schemas/products.entity-schema";
import { Repository } from "typeorm";
import { ProductsRepository } from 'src/model/products/procuts.repository';






@Injectable()
export class ProductsDBRepository implements ProductsRepository {

    constructor(
        @InjectRepository(ProductsEntitySchema)
        private readonly schemaRepository: Repository<ProductsEntitySchema>
    ) { }

    async getAll(): Promise<Products[]> {
        return this.schemaRepository.find()
    }

}