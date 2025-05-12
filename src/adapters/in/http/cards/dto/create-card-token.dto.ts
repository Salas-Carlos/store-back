
import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { IsNumberCard } from "../../transactions/decorators/validate-number-card.decorator";


export class CreateCardTokenDTO {

    @IsString()
    @IsNotEmpty()
    @IsNumberCard()
    numberCard: string;

    @IsString()
    @IsNotEmpty()
    cvc: string;

    @IsString()
    @IsNotEmpty()
    expMonth: string

    @IsString()
    @IsNotEmpty()
    expYear: string

    @IsString()
    @IsNotEmpty()
    cardHolder: string

}
