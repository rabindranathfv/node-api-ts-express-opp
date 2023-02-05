import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { PurchaseProductEntity } from '../../custom/entities/purchases-products.entity';
import { CustomerEntity } from '../../customer/entities/customer.entity';
import { Purchase } from '../interfaces/purchase.interface';

@Entity({ name: 'purchase' })
export class PurchaseEntity implements Purchase {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  status!: string;

  @Column()
  paymentMethod!: string;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => CustomerEntity, (customer) => customer.purchases) // mismo nombre de referencia en la clase customer
  @JoinColumn({ name: 'customer_id' })
  customer!: CustomerEntity;

  @OneToMany(() => PurchaseProductEntity, (purchaseProduct) => purchaseProduct.purchase)
  purchaseProduct!: PurchaseProductEntity[];
}
