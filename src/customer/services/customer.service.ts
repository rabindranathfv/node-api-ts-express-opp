import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { CustomerDTO } from '../dto/customer.dto';
import { CustomerEntity } from '../entities/customer.entity';

class CustomerService extends BaseService<CustomerEntity> {
  constructor() {
    super(CustomerEntity);
  }

  async findAllCustomers(): Promise<CustomerEntity[]> {
    return (await this.execRepository).find();
  }

  async findCustomerById(cid: string): Promise<CustomerEntity | null> {
    return (await this.execRepository).findOneBy({ id: cid });
  }

  async createCustomer(body: CustomerDTO): Promise<CustomerEntity> {
    return (await this.execRepository).save(body);
  }

  async deleteCustomer(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

  async updateCustomer(id: string, infoUpdate: CustomerDTO): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}

export default CustomerService;
