import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { PurchaseEntity } from '../../purchase/entities/purchase.entity';
import { ProductEntity } from '../../product/entities/product.entity';

@Entity({ name: 'purchases_product' })
export class PurchaseProductEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  quantityProduct!: number;

  @Column()
  totalPrice!: number;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => PurchaseEntity, (purchase) => purchase.purchaseProduct)
  @JoinColumn({ name: 'purchase_id' })
  purchase!: PurchaseEntity;

  @ManyToOne(() => ProductEntity, (product) => product.purchaseProduct)
  @JoinColumn({ name: 'product_id' })
  product!: ProductEntity;
}
