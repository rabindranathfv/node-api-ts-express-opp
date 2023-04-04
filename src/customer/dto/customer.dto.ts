import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { UserEntity } from '../../user/entities/user.entity';

export class CustomerDTO {
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
