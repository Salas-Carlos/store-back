

export type CreateTokenCardCommand = {
    number: string;
    cvc: string;
    exp_month: string;
    exp_year: string;
    card_holder: string;
}