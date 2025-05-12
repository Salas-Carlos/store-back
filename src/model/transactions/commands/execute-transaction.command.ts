import { CreateTransactionCommand } from "./create-transaction.command";



export type ExecuteTransactionCommand = CreateTransactionCommand & {
    tokenCard: string,
    acceptToken: string,
    signature: string,
};