



export type CreateTransactionWompiCommand = {
    payment_method: {
        type: string,
        installments: number,
        token: string
    }
    amount_in_cents: number;
    reference: string;
    currency: string;
    customer_email: string;
    acceptance_token: string;
    signature: string;

}