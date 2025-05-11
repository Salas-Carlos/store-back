import { Body, Controller, Post } from "@nestjs/common";
import { CreateTransactionHandler } from "src/handler/transactions/create-transactions.handler";
import { HTTPResponse } from "src/models/http-response.model";
import { CreateTransactionDTO } from "./dto/create-transaction.dto";

@Controller('/transaction')
export class TransactionsController {
    constructor(private readonly createTransactionHandler: CreateTransactionHandler) { }

    @Post()
    async createTransaction(
        @Body() body: CreateTransactionDTO
    ): Promise<HTTPResponse> {
        return this.createTransactionHandler.execute(body);
    }
}
