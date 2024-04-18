import { CategoryService } from './category.service';
import { Controller, Inject } from '@nestjs/common';

@Controller()
class CategoryGRPCController {
  constructor(@Inject(CategoryService) private readonly categoryService: CategoryService) {}
}

export { CategoryGRPCController };

