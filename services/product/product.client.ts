import { ClientGrpc, ClientsModule, Transport } from '@nestjs/microservices';
import { ProductDto } from './dto/product.dto';
import { Observable } from 'rxjs';

const PRODUCT_CLIENT = Symbol('$ProductClient');

interface ProductClient {
  getProducts(request: {}): Observable<ProductDto>;
}

// TODO: Add credentials
const ProductClientModule = ClientsModule.register([
  {
    name: PRODUCT_CLIENT,
    transport: Transport.GRPC,
    options: {
      package: 'product',
      protoPath: './proto/product.proto',
      url: `dialogic-product:${process.env.SERVICE_PORT}`
    }
  }
]);

const getProductClient = (client: ClientGrpc) => client.getService<ProductClient>('ProductService');

export { PRODUCT_CLIENT, ProductClientModule, ProductClient, getProductClient };
