import { HttpException, HttpStatus } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { generateHash } from "src/common/utils/create-hash.util";
import { ProductsRepository } from "src/model/products/produts.repository";
import { CreateTransactionCommand } from "src/model/transactions/commands/create-transaction.command";
import { ExecuteTransactionCommand } from "src/model/transactions/commands/execute-transaction.command";
import { StatusTransactionEnum } from "src/model/transactions/enums/status-transaction.enum";
import { TransactionsRepository } from "src/model/transactions/transactions.repository";
import { WompiRepository } from "src/model/wompi/wompi.repository";



export class CreateTransactionUseCase {
    constructor(
        private readonly wompiService: WompiRepository,
        private readonly configService: ConfigService,
        private readonly transactionRepository: TransactionsRepository,
        private readonly productRepository: ProductsRepository,

    ) { }

    async execute(body: CreateTransactionCommand) {

        const product = await this.productRepository.getById(body.productId);

        if (!product) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }

        if (product.stock < body.quantity) {
            throw new HttpException('Not enough product quantity', HttpStatus.BAD_REQUEST);
        }

        let transaction = await this.transactionRepository.save(body);

        try {
            const acceptToken = await this.wompiService.getAcceptanceToken();

            const secretIntegrity = this.configService.get<string>('WOMPI_SECRET_INTEGRITY');

            const signature = await generateHash(`${body.reference}${body.totalValue}${body.currency}${secretIntegrity}`);

            const transactionData: ExecuteTransactionCommand = {
                ...body,
                tokenCard: body.cardToken,
                acceptToken,
                signature
            }

            const transactionWompi = await this.wompiService.createTransaction(transactionData)

            transaction = await this.transactionRepository.update(transaction.id, { transactionId: transactionWompi.data.id });

        } catch (error) {
            console.log('Error creating transaction', error);
            transaction = await this.transactionRepository.update(transaction.id, { status: StatusTransactionEnum.ERROR });
        }
        return transaction
    }
}