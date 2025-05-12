import { CreateCardTokenDTO } from 'src/adapters/in/http/cards/dto/create-card-token.dto';
import { CreateCardTokenCommand } from 'src/model/cards/commands/create-card-token.command';


export class CreateCardTokenMapper {
    public static toCommand(body: CreateCardTokenDTO): CreateCardTokenCommand {

        const createCardTokenCommand: CreateCardTokenCommand = {
            ...body,
        }

        return createCardTokenCommand;
    }
}