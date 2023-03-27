import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CategoryDTO {
  @IsOptional()
  id!: string;

  @IsNotEmpty()
  categoryName!: string;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}
