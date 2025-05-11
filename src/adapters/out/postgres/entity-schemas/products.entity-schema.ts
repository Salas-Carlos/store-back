import { Entity, Column } from 'typeorm';
import { EntitySchema } from './entity-schema';
import { Products } from 'src/model/products/products.entity';


@Entity({ name: 'products' })
export class ProductsEntitySchema extends EntitySchema implements Products {

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    stock: number;
}
