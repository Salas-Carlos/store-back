import { HttpStatus, Injectable } from "@nestjs/common";
import { SUCCESS_MESSAGE } from "src/common/response-states/success-states.message";
import { GetTransactionByIdUseCase } from "src/domain/usecase/transactions/get-transaction-by-id.usecase";
import { HTTPResponse } from "src/models/http-response.model";

@Injectable()
export class GetTransactionByIdHandler {
    constructor(
        private readonly getTransactionByIdUseCase: GetTransactionByIdUseCase
    ) { }

    async execute(id: number): Promise<HTTPResponse> {

        const transaction = await this.getTransactionByIdUseCase.execute(id);

        return new HTTPResponse(HttpStatus.OK, SUCCESS_MESSAGE.SUCCESS.code, SUCCESS_MESSAGE.SUCCESS.message, transaction);
    }
}