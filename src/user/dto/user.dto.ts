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

  @IsOptional()
  numberPhone!: number;

  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  password!: string;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}
