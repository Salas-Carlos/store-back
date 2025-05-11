import { Products } from 'src/model/products/products.entity';



export interface ProductsRepository {
    getAll(): Promise<Products[]>
}