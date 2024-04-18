import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CategoriesSearchQuerySchema = z.object({
  search: z.string().min(3).max(64)
});

class CategoriesSearchQueryDto extends createZodDto(CategoriesSearchQuerySchema) {}

export { CategoriesSearchQueryDto };
