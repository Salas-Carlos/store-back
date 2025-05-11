
import { generateUuid } from 'src/common/utils/genetare-uuid.util';
import { CreateTransactionDTO } from '../../adapters/in/http/transactions/dto/create-transaction.dto';
import { CreateTransactionCommand } from "src/model/transactions/commands/create-transaction.command";


export class CreateTransactionMapper {
    public static toCommand(body: CreateTransactionDTO): CreateTransactionCommand {

        const createTransactionCommand: CreateTransactionCommand = {
            ...body,
            currency: 'COP',
            reference: generateUuid(),
        }

        return createTransactionCommand
    }
}