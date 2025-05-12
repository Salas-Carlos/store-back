import { CreateTransactionCommand } from "./commands/create-transaction.command";
import { Transactions } from "./transactions.entity";


export interface TransactionsRepository {
    save(createTransactionCommand: CreateTransactionCommand): Promise<Transactions>,
    getById(id: number): Promise<Transactions>,
    update(id: number, columnsToUpdate: any): Promise<Transactions>,

}