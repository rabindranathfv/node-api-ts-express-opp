import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Customer } from '../interfaces/customer.interface';
import { UserEntity } from '../../user/entities/user.entity';
import { PurchaseEntity } from '../../purchase/entities/purchase.entity';

@Entity({ name: 'customer' })
export class CustomerEntity implements Customer {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  address!: string;

  @Column()
  dni!: number;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToOne(() => UserEntity, (user) => user.customer)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @OneToMany(() => PurchaseEntity, (purchase) => purchase.customer)
  purchases!: PurchaseEntity[];
}
