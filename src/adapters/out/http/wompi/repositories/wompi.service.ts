import { Injectable } from "@nestjs/common";
import { WompiClient } from "../config/client";
import { WompiRepository } from "src/model/wompi/wompi.repository";
import { CreateTokenCardCommand } from "src/model/wompi/commands/create-token-card.command";



@Injectable()
export class WompiApiService implements WompiRepository {
    constructor(private readonly wompiClient: WompiClient) { }

    async getTokenCard(createTokenCardCommand: CreateTokenCardCommand) {
        const response = await this.wompiClient.createTokenCard(createTokenCardCommand);
        return response?.data.id;
    }

    async getAcceptanceToken() {
        const response = await this.wompiClient.getAcceptanceToken();
        return response?.data?.presigned_acceptance?.acceptance_token;
    }
}