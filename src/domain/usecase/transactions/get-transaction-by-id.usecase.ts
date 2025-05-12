
import { HttpException, HttpStatus } from "@nestjs/common";
import { ProductsRepository } from "src/model/products/produts.repository";
import { StatusTransactionEnum } from "src/model/transactions/enums/status-transaction.enum";
import { TransactionsRepository } from "src/model/transactions/transactions.repository";
import { WompiRepository } from "src/model/wompi/wompi.repository";




export class GetTransactionByIdUseCase {
    constructor(
        private readonly transactionRepository: TransactionsRepository,
        private readonly wompiService: WompiRepository,
        private readonly productRepository: ProductsRepository,

    ) { }

    async execute(id: number) {

        let transaction = await this.transactionRepository.getById(id);

        if (!transaction) {
            throw new HttpException('Transaction not found', HttpStatus.NOT_FOUND);
        }

        if (transaction.status === StatusTransactionEnum.PENDING) {
            const transactionWompi = await this.wompiService.getTransaction(transaction.transactionId);

            if (!transactionWompi) {
                throw new HttpException('Transaction not found in Wompi', HttpStatus.NOT_FOUND);
            }

            if (transactionWompi?.data?.status) {
                transaction = await this.transactionRepository.update(transaction.id, { status: transactionWompi?.data?.status });
            }

            if (transactionWompi?.data?.status === StatusTransactionEnum.APPROVED) {
                await this.productRepository.update(transaction?.product.id, { stock: transaction?.product.stock - transaction?.quantity });
            }
        }

        return transaction
    }
}