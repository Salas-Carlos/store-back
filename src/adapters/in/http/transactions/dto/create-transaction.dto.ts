
import { IsNotEmpty, IsNumber, IsString } from "@nestjs/class-validator";
import { IsNumberCard } from "../decorators/validate-number-card.decorator";

export class CreateTransactionDTO {

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


    @IsNumber()
    @IsNotEmpty()
    quantity: number

    @IsNumber()
    @IsNotEmpty()
    productId: number;

    @IsNumber()
    @IsNotEmpty()
    totalValue: number;


    @IsString()
    @IsNotEmpty()
    customerEmail: string

}
