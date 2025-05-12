import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { EntitySchema } from './entity-schema';
import { ProductsEntitySchema } from './products.entity-schema';
import { StatusTransactionEnum } from 'src/model/transactions/enums/status-transaction.enum';

@Entity({ name: 'transactions' })
export class TransactionsEntitySchema extends EntitySchema {

    @Column({ name: 'total_value' })
    totalValue: number;

    @Column()
    reference: string;

    @Column({ name: 'customer_email' })
    customerEmail: string;

    @Column({ default: 'PENDING' })
    status: StatusTransactionEnum;

    @Column()
    quantity: number;

    @ManyToOne(() => ProductsEntitySchema)
    @JoinColumn({ name: 'product_id' })
    product: ProductsEntitySchema;

    @Column({ name: 'product_id' })
    productId: number

    @Column({ name: 'transaction_id', nullable: true })
    transactionId: string;
}
