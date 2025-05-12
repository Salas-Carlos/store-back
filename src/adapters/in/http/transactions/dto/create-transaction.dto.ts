
import { IsNotEmpty, IsNumber, IsString } from "@nestjs/class-validator";

export class CreateTransactionDTO {

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

    @IsString()
    @IsNotEmpty()
    cardToken: string;

}
