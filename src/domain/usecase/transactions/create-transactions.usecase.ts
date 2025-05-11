import { generateHash } from "src/common/utils/create-hash.util";
import { ProductsRepository } from "src/model/products/procuts.repository";
import { CreateTransactionCommand } from "src/model/transactions/commands/create-transaction.command";
import { WompiRepository } from "src/model/wompi/wompi.repository";


export class CreateTransactionUseCase {
    constructor(
        private readonly wompiService: WompiRepository

    ) { }

    async execute(body: CreateTransactionCommand) {

        const tokenCard = await this.wompiService.getTokenCard({
            number: body.numberCard,
            cvc: body.cvc,
            exp_month: body.expMonth,
            exp_year: body.expYear,
            card_holder: body.cardHolder
        });

        const acceptToken = await this.wompiService.getAcceptanceToken();

        const signature = await generateHash(`${body.reference}${body.totalValue}${body.currency}${process.env.WOMPI_SECRET_INTEGRITY}`);
        console.log('signature: ', signature)
        console.log('tokenCard: ', tokenCard)
        console.log('acceptToken: ', acceptToken)

        return {}
    }
}