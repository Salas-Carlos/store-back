

export type CreateTransactionCommand = {
    numberCard: string;
    cvc: string;
    expMonth: string;
    expYear: string;
    cardHolder: string;

    quantity: number;
    productId: number;
    totalValue: number;
    currency: string;
    customerEmail: string;
    reference: string;

}