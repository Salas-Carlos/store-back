import { Entity } from "../entity";
import { Products } from "../products/products.entity";
import { StatusTransactionEnum } from "./enums/status-transaction.enum";


export class Transactions extends Entity {
    totalValue: number;
    reference: string;
    customerEmail: string;
    status: StatusTransactionEnum;
    quantity: number;
    product: Products;
    transactionId: string;
}