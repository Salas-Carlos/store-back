import { CreateCardTokenCommand } from "../cards/commands/create-card-token.command";
import { ExecuteTransactionCommand } from "../transactions/commands/execute-transaction.command";


export interface WompiRepository {
    getTokenCard(createCardTokenCommand: CreateCardTokenCommand): Promise<any>,
    getAcceptanceToken(): Promise<any>,
    createTransaction(executeTransactionCommand: ExecuteTransactionCommand): Promise<any>,
    getTransaction(transactionId: string): Promise<any>,
}