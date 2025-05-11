import { Entity } from "src/model/entity";
import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class EntitySchema extends Entity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;
}