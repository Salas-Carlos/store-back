import { HttpStatus, Injectable } from "@nestjs/common";
import { CreateCardTokenDTO } from "src/adapters/in/http/cards/dto/create-card-token.dto";
import { SUCCESS_MESSAGE } from "src/common/response-states/success-states.message";
import { CreateCardTokenUseCase } from "src/domain/usecase/cards/create-card-token.usecase";
import { HTTPResponse } from "src/models/http-response.model";
import { CreateCardTokenMapper } from "src/models/mappers/create-card-token.mapper";

@Injectable()
export class CreateCardTokenHandler {
    constructor(
        private readonly createCardTokenUseCase: CreateCardTokenUseCase
    ) { }

    async execute(body: CreateCardTokenDTO): Promise<HTTPResponse> {

        const createCardTokenCommand = CreateCardTokenMapper.toCommand(body);

        const cardToken = await this.createCardTokenUseCase.execute(createCardTokenCommand);

        return new HTTPResponse(HttpStatus.OK, SUCCESS_MESSAGE.SUCCESS.code, SUCCESS_MESSAGE.SUCCESS.message, { cardToken });
    }
}