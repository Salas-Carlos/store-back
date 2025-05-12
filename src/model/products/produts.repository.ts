import { Products } from 'src/model/products/products.entity';



export interface ProductsRepository {
    getAll(): Promise<Products[]>,
    getById(id: number): Promise<Products>,
    update(id: number, columnsToUpdate: any): Promise<Products>,
}