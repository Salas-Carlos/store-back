import { ProductsRepository } from "src/model/products/procuts.repository";


export class CreateTransactionUseCase {
    constructor(private readonly repository: ProductsRepository) { }

    async execute() {
        return this.repository.getAll();
    }
}