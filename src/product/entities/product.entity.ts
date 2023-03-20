import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable, OneToMany } from 'typeorm';
import { CategoryEntity } from '../../category/entities/category.entity';
import { PurchaseProductEntity } from '../../purchase/entities/purchases-products.entity';
import { Product } from '../interfaces/product.interface';

@Entity({ name: 'product' })
export class ProductEntity implements Product {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  productName!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinTable({ name: 'category_id' })
  category!: CategoryEntity;

  @OneToMany(() => PurchaseProductEntity, (purchaseProduct) => purchaseProduct.product)
  purchaseProduct!: PurchaseProductEntity[];
}
