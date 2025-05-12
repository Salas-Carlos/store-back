import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TransactionsEntitySchema } from '../entity-schemas/transaction.entity-schema';
import { TransactionsRepository } from 'src/model/transactions/transactions.repository';
import { CreateTransactionCommand } from 'src/model/transactions/commands/create-transaction.command';
import { Transactions } from 'src/model/transactions/transactions.entity';

@Injectable()
export class TransactionsDBRepository implements TransactionsRepository {

    constructor(
        @InjectRepository(TransactionsEntitySchema)
        private readonly schemaRepository: Repository<TransactionsEntitySchema>
    ) { }

    async save(createTransactionCommand: CreateTransactionCommand): Promise<Transactions> {
        return this.schemaRepository.save(createTransactionCommand)
    }

    async getById(id: number): Promise<Transactions> {

        return this.schemaRepository.findOne({
            where: {
                id
            },
            relations: {
                product: true,
            }
        })
    }

    async update(id: number, columnsToUpdate: any): Promise<Transactions> {
        await this.schemaRepository.update({ id }, { ...columnsToUpdate });
        return this.getById(id);
    }

}