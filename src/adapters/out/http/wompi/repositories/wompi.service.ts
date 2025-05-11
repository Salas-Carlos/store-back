import { Injectable } from "@nestjs/common";
import { WompiClient } from "../config/client";



@Injectable()
export class WompiApiService {
    constructor(private readonly wompiClient: WompiClient) { }

    async createTokenCard() {

    }
}