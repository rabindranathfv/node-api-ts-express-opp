import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { UserEntity } from '../../user/entities/user.entity';
import { Customer } from '../interfaces/customer.interface';

export class CustomerDTO implements Customer {
  @IsOptional()
  id!: string;

  @IsNotEmpty()
  address!: string;

  @IsNotEmpty()
  dni!: number;

  @IsNotEmpty()
  user!: UserEntity;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}
