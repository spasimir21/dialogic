import { ProductDto } from './dto/product.dto';
import { Injectable } from '@nestjs/common';
import { id } from '@libs/shared/utils/id';

@Injectable()
class ProductService {
  async getProducts(): Promise<ProductDto[]> {
    return [
      {
        id: id(),
        name: 'Product #1',
        description: 'Description #1'
      },
      {
        id: id(),
        name: 'Product #2',
        description: 'Description #2'
      },
      {
        id: id(),
        name: 'Product #3',
        description: 'Description #3'
      }
    ];
  }
}

export { ProductService };
