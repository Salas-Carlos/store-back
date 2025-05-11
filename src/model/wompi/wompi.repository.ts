import { CreateTokenCardCommand } from "./commands/create-token-card.command";

export interface WompiRepository {
    getTokenCard(createTokenCardCommand: CreateTokenCardCommand): Promise<any>,
    getAcceptanceToken(): Promise<any>
}