import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { CustomerEntity } from '../../customer/entities/customer.entity';
import { User } from '../user.interface';

@Entity({ name: 'user' })
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  username!: string;

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  city!: string;

  @Column()
  province!: string;

  @Column()
  numberPhone!: number;

  @Column()
  @Unique(['email'])
  email!: string;

  @Column()
  password!: string;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity;
}
