import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { ProductService } from '../../product/product.service';
import { PurchaseProductDTO } from '../dto/purchase-product.dto';
import { PurchaseProductEntity } from '../entities/purchases-products.entity';

export class PurchaseProductService extends BaseService<PurchaseProductEntity> {
  constructor(private readonly productService: ProductService = new ProductService()) {
    super(PurchaseProductEntity);
  }

  async findAllPurchaseProducts(): Promise<PurchaseProductEntity[]> {
    return (await this.execRepository).find();
  }
  async findPurchaseProductById(id: string): Promise<PurchaseProductEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createPurchaseProduct(body: PurchaseProductDTO): Promise<PurchaseProductEntity> {
    const newPurchaseProduct = (await this.execRepository).save(body);
    const product = await this.productService.findProductById((await newPurchaseProduct).product.id);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    (await newPurchaseProduct).totalPrice = product!.price * (await newPurchaseProduct).quantityProduct;
    return (await this.execRepository).save(await newPurchaseProduct);
  }
  async deletePurchaseProduct(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updatePurchaseProduct(id: string, infoUpdate: PurchaseProductDTO): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
