import { ServiceTokenController, TokenService } from '@libs/server/token';
import { SharedConfigProvider } from '@shared/server/sharedConfig';
import { CategoryHTTPController } from './category.http.controller';
import { CategoryGRPCController } from './category.grpc.controller';
import { AuthClientModule } from '@services/auth/auth.client';
import { CategoryService } from './category.service';
import { CategoryConfigProvider } from './config';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthClientModule],
  controllers: [ServiceTokenController, CategoryHTTPController, CategoryGRPCController],
  providers: [SharedConfigProvider, TokenService, CategoryConfigProvider, CategoryService]
})
class CategoryModule {}

export { CategoryModule };

