import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { CategoryEntity } from '../../category/entities/category.entity';

export class ProductDTO {
  @IsOptional()
  id!: string;

  @IsNotEmpty()
  productName!: string;

  @IsNotEmpty()
  description!: string;

  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  category!: CategoryEntity;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}
