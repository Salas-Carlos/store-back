import { Body, Controller, Post } from "@nestjs/common";
import { HTTPResponse } from "src/models/http-response.model";
import { CreateCardTokenDTO } from "./dto/create-card-token.dto";
import { CreateCardTokenHandler } from "src/handler/cards/create-card-token.handler";


@Controller('/cards')
export class CardsController {
    constructor(private readonly createCardTokenHandler: CreateCardTokenHandler) { }

    @Post()
    async createCardToken(
        @Body() body: CreateCardTokenDTO
    ): Promise<HTTPResponse> {
        return this.createCardTokenHandler.execute(body);
    }
}
