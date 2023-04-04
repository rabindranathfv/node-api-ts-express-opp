import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../config/base.service';
import { CategoryDTO } from './dto/category.dto';
import { CategoryEntity } from './entities/category.entity';

export class CategoryService extends BaseService<CategoryEntity> {
  constructor() {
    super(CategoryEntity);
  }

  async findAllCategoties(): Promise<CategoryEntity[]> {
    return (await this.execRepository).find();
  }
  async findCategoryById(id: string): Promise<CategoryEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createCategory(body: CategoryDTO): Promise<CategoryEntity> {
    const { categoryName } = body;
    console.log('🚀 ~ file: category.service.ts:22 ~ CategoryService ~ createCategory ~ body: ********', typeof body, body, Object.keys(body));
    return (await this.execRepository).save(body);
  }
  async deleteCategory(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updateCategory(id: string, infoUpdate: CategoryDTO): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
