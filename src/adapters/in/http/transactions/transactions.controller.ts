import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateTransactionHandler } from "src/handler/transactions/create-transactions.handler";
import { HTTPResponse } from "src/models/http-response.model";
import { CreateTransactionDTO } from "./dto/create-transaction.dto";
import { GetTransactionByIdHandler } from "src/handler/transactions/get-transaction-by-id.handler";

@Controller('/transaction')
export class TransactionsController {
    constructor(
        private readonly createTransactionHandler: CreateTransactionHandler,
        private readonly getTransactionByIdHandler: GetTransactionByIdHandler,

    ) { }

    @Post()
    async createTransaction(
        @Body() body: CreateTransactionDTO
    ): Promise<HTTPResponse> {
        return this.createTransactionHandler.execute(body);
    }

    @Get('/:id')
    async getTransactionById(
        @Param('id') id: number
    ): Promise<HTTPResponse> {
        return this.getTransactionByIdHandler.execute(id);
    }
}
