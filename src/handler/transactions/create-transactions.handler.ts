import { HttpStatus, Injectable } from "@nestjs/common";
import { CreateTransactionDTO } from "src/adapters/in/http/transactions/dto/create-transaction.dto";
import { SUCCESS_MESSAGE } from "src/common/response-states/success-states.message";
import { CreateTransactionUseCase } from "src/domain/usecase/transactions/create-transactions.usecase";
import { HTTPResponse } from "src/models/http-response.model";

@Injectable()
export class CreateTransactionHandler {
    constructor(
        //  private readonly createTransactionUseCase: CreateTransactionUseCase
    ) {

    }

    async execute(body: CreateTransactionDTO): Promise<HTTPResponse> {

        //const products = await this.createTransactionUseCase.execute();

        return new HTTPResponse(HttpStatus.OK, SUCCESS_MESSAGE.SUCCESS.code, SUCCESS_MESSAGE.SUCCESS.message, { products: [] });
    }
}