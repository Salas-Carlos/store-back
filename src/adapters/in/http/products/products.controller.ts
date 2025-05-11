import { Controller, Get } from '@nestjs/common';
import { GetAllProductsHandler } from 'src/handler/products/get-all-products.handler';
import { HTTPResponse } from 'src/models/http-response.model';


@Controller('/products')
export class ProductsController {
    constructor(private readonly getAllProductsHandler: GetAllProductsHandler) { }

    @Get()
    async getAll(): Promise<HTTPResponse> {
        return this.getAllProductsHandler.execute();
    }
}
