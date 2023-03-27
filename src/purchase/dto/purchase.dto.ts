import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { CustomerEntity } from '../../customer/entities/customer.entity';

export class PurchaseDTO {
  @IsOptional()
  id!: string;

  @IsNotEmpty()
  status!: string;

  @IsNotEmpty()
  paymentMethod!: string;

  @IsNotEmpty()
  customer!: CustomerEntity;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}
