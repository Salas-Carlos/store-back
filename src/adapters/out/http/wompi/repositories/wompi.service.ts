import { Injectable } from "@nestjs/common";
import { WompiClient } from "../config/client";
import { WompiRepository } from "src/model/wompi/wompi.repository";
import { ExecuteTransactionCommand } from "src/model/transactions/commands/execute-transaction.command";
import { CreateCardTokenCommand } from "src/model/cards/commands/create-card-token.command";



@Injectable()
export class WompiApiService implements WompiRepository {
    constructor(private readonly wompiClient: WompiClient) { }

    async getTokenCard(createCardTokenCommand: CreateCardTokenCommand) {

        const response = await this.wompiClient.createTokenCard({
            number: createCardTokenCommand.numberCard,
            cvc: createCardTokenCommand.cvc,
            exp_month: createCardTokenCommand.expMonth,
            exp_year: createCardTokenCommand.expYear,
            card_holder: createCardTokenCommand.cardHolder
        });
        return response?.data.id;
    }

    async getAcceptanceToken() {
        const response = await this.wompiClient.getAcceptanceToken();
        return response?.data?.presigned_acceptance?.acceptance_token;
    }

    async createTransaction(executeTransactionCommand: ExecuteTransactionCommand) {
        const response = await this.wompiClient.createTransaction({
            payment_method: {
                type: 'CARD',
                installments: 1,
                token: executeTransactionCommand.tokenCard
            },
            acceptance_token: executeTransactionCommand.acceptToken,
            amount_in_cents: executeTransactionCommand.totalValue,
            reference: executeTransactionCommand.reference,
            currency: executeTransactionCommand.currency,
            customer_email: executeTransactionCommand.customerEmail,
            signature: executeTransactionCommand.signature
        });
        return response;
    }

    async getTransaction(transactionId: string) {
        const response = await this.wompiClient.getTransaction(transactionId);
        return response;
    }
}