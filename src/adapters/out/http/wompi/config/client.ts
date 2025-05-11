import { HttpService } from "@nestjs/axios";
import { Inject } from "@nestjs/common";


export class WompiClient {
    constructor(
        private readonly httpService: HttpService,
        @Inject('WOMPI_API_URL')
        private readonly baseURL: string,
    ) { }

    async createTokenCard() {
        this.httpService.request({
            method: 'POST'
        })
    }
}