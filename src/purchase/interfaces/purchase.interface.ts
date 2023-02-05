export interface Purchase {
  id: string;
  status: string;
  paymentMethod: string;
  createdAt?: Date;
  updatedAt?: Date;
}
