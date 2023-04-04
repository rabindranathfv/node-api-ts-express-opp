import { IsNotEmpty, IsOptional, IsDate } from 'class-validator';

export class UserDTO {
  @IsOptional()
  id!: string;

  @IsNotEmpty()
  username!: string;

  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  lastname!: string;

  @IsNotEmpty()
  city!: string;

  @IsNotEmpty()
  province!: string;

  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  password!: string;

  @IsNotEmpty()
  role!: RoleType;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}

export enum RoleType {
  USER = 'USER',
  CUSTOMER = 'CUSTOMER',
  ADMIN = 'ADMIN',
}
