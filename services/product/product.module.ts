import { ServiceTokenController, TokenService } from '@libs/server/token';
import { SharedConfigProvider } from '@shared/server/sharedConfig';
import { ProductHTTPController } from './product.http.controller';
import { ProductGRPCController } from './product.grpc.controller';
import { AuthClientModule } from '@services/auth/auth.client';
import { ProductService } from './product.service';
import { ProductConfigProvider } from './config';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthClientModule],
  controllers: [ServiceTokenController, ProductHTTPController, ProductGRPCController],
  providers: [SharedConfigProvider, TokenService, ProductConfigProvider, ProductService]
})
class ProductModule {}

export { ProductModule };
