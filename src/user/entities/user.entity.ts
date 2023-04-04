import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { CustomerEntity } from '../../customer/entities/customer.entity';
import { RoleType } from '../dto/user.dto';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
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
  @Unique(['email'])
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column({ type: 'enum', enum: RoleType, nullable: false })
  role!: RoleType;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity;
}

// CORRER ESE SCRIPT
// npm run mig:gen -- src/migrations/addRoleUser

// LUEGO
// npm run mig:run
