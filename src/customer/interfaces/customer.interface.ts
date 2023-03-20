import { UserEntity } from '../../user/entities/user.entity';

export interface Customer {
  id: string;
  address: string;
  dni: number;
  user: UserEntity;
  createdAt?: Date;
  updatedAt?: Date;
}
