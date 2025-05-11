import { HttpService } from "@nestjs/axios";
import { Inject } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { CreateTokenCardCommand } from "src/model/wompi/commands/create-token-card.command";


export class WompiClient {
    constructor(
        private readonly httpService: HttpService,
        @Inject('WOMPI_API_URL')
        private readonly baseURL: string,
        @Inject('WOMPI_PUBLIC_KEY')
        private readonly publicKey: string,

    ) { }

    async createTokenCard(createTokenCardCommand: CreateTokenCardCommand): Promise<any> {
        try {
            const response = await firstValueFrom(this.httpService.request({
                method: 'POST',
                url: `${this.baseURL}/tokens/cards`,
                data: createTokenCardCommand,
                headers: { Authorization: `Bearer ${this.publicKey}` }
            }))
            return response?.data
        } catch (error) {
            if (error.response) {
                throw new Error(`Error ${error.response.status}: ${JSON.stringify(error.response.data)}`);
            }
        }
    }

    async getAcceptanceToken(): Promise<any> {
        try {
            const response = await firstValueFrom(this.httpService.request({
                method: 'GET',
                url: `${this.baseURL}/merchants/${this.publicKey}`,
            }))
            return response?.data
        } catch (error) {
            if (error.response) {
                throw new Error(`Error ${error.response.status}: ${JSON.stringify(error.response.data)}`);
            }
        }
    }
}