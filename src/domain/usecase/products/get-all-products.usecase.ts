import { ProductsRepository } from "src/model/products/produts.repository";


export class GetAllProductsUseCase {
    constructor(private readonly repository: ProductsRepository) { }

    async execute() {
        return this.repository.getAll();
    }
}