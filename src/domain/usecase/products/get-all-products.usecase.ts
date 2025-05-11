import { ProductsRepository } from "src/model/products/procuts.repository";


export class GetAllProductsUseCase {
    constructor(private readonly repository: ProductsRepository) { }

    async execute() {
        return this.repository.getAll();
    }
}