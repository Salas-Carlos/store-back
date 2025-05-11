import { HttpStatus, Injectable } from "@nestjs/common";
import { SUCCESS_MESSAGE } from "src/common/response-states/success-states.message";
import { GetAllProductsUseCase } from "src/domain/usecase/products/get-all-products.usecase";
import { HTTPResponse } from "src/models/http-response.model";

@Injectable()
export class GetAllProductsHandler {
    constructor(private readonly getAllProductsUseCase: GetAllProductsUseCase) {

    }

    async execute(): Promise<HTTPResponse> {

        const products = await this.getAllProductsUseCase.execute();

        return new HTTPResponse(HttpStatus.OK, SUCCESS_MESSAGE.SUCCESS.code, SUCCESS_MESSAGE.SUCCESS.message, { products });
    }
}