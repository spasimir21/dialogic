import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { IToken, Token, TokenGuard } from '@libs/server/token';
import { TokenData } from '@services/auth/dto/TokenData';
import { ProductService } from './product.service';
import { ProductDto } from './dto/ProductDto';
import { UseZodGuard } from 'nestjs-zod';

@Controller()
class ProductHTTPController {
  constructor(@Inject(ProductService) private readonly productService: ProductService) {}

  @UseZodGuard('body', ProductDto)
  @UseGuards(TokenGuard)
  @Post('/')
  async createProduct(@Token() token: IToken<TokenData>, @Body() product: ProductDto) {
    console.log(token.data, product);
    return 'OK';
  }

  @Get('/products')
  async products() {
    return await this.productService.getProducts();
  }
}

export { ProductHTTPController };
