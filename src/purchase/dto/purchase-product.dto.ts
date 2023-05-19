import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductEntity } from '../../product/entities/product.entity';
import { PurchaseEntity } from '../entities/purchase.entity';

export class PurchaseProductDTO {
  @IsOptional()
  id!: string;

  @IsNotEmpty()
  quantityProduct!: number;

  @IsOptional()
  totalPrice!: number;

  @IsOptional()
  purchase?: PurchaseEntity;

  @IsOptional()
  product?: ProductEntity;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}
