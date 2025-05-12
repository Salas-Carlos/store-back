import { CreateCardTokenCommand } from "src/model/cards/commands/create-card-token.command";
import { WompiRepository } from "src/model/wompi/wompi.repository";



export class CreateCardTokenUseCase {
    constructor(
        private readonly wompiService: WompiRepository,
    ) { }

    async execute(body: CreateCardTokenCommand) {
        return await this.wompiService.getTokenCard(body);
    }
}