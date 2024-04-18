import { CategoryService } from './category.service';
import { Controller, Inject } from '@nestjs/common';

@Controller()
class CategoryHTTPController {
  constructor(@Inject(CategoryService) private readonly categoryService: CategoryService) {}
}

export { CategoryHTTPController };

