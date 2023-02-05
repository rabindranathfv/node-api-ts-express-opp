import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ProductEntity } from '../../product/entities/product.entity';
import { Category } from '../interfaces/category.interface';

@Entity({ name: 'category' })
export class CategoryEntity implements Category {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  categoryName!: string;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products!: ProductEntity[];
}
