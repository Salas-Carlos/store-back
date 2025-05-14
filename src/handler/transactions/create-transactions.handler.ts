import { HttpStatus, Injectable } from "@nestjs/common";
import { CreateTransactionDTO } from "src/adapters/in/http/transactions/dto/create-transaction.dto";
import { SUCCESS_MESSAGE } from "src/common/response-states/success-states.message";
import { CreateTransactionUseCase } from "src/domain/usecase/transactions/create-transactions.usecase";
import { HTTPResponse } from "src/models/http-response.model";
import { CreateTransactionMapper } from "src/models/mappers/create-transaction.mapper";

@Injectable()
export class CreateTransactionHandler {
    constructor(
        private readonly createTransactionUseCase: CreateTransactionUseCase
    ) { }

    async execute(body: CreateTransactionDTO): Promise<HTTPResponse> {

        const createTransactionCommand = CreateTransactionMapper.toCommand(body);

        const transaction = await this.createTransactionUseCase.execute(createTransactionCommand);

        return new HTTPResponse(HttpStatus.OK, SUCCESS_MESSAGE.SUCCESS.code, SUCCESS_MESSAGE.SUCCESS.message, transaction);
    }
}