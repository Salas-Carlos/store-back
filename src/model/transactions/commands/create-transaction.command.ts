

export type CreateTransactionCommand = {

    quantity: number;
    productId: number;
    totalValue: number;
    currency: string;
    customerEmail: string;
    reference: string;
    cardToken: string

}