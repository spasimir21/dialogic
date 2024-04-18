import { CategoriesSearchQueryDto } from './dto/categoriesSearchQuery.dto';
import { CategoryNamesDto } from './dto/categoryNames.dto';
import { Category } from './interface/category.interface';
import { PrismaService } from '@libs/server/prisma';
import { Inject, Injectable } from '@nestjs/common';
import { CategoryConfig } from './config';

@Injectable()
class CategoryService {
  constructor(
    @Inject(CategoryConfig) private readonly config: CategoryConfig,
    private readonly prismaService: PrismaService
  ) {}

  async ensureCategories(input: CategoryNamesDto): Promise<Category[]> {
    return await this.prismaService.$transaction(
      input.names.map(name =>
        this.prismaService.category.upsert({
          where: { name },
          update: {},
          create: { name }
        })
      )
    );
  }

  async searchCategories(search: string): Promise<Category[]> {
    return await this.prismaService.category.findMany({
      take: this.config.categorySearchMaxResultCount,
      orderBy: {
        _relevance: {
          fields: ['name'],
          search,
          sort: 'desc'
        }
      }
    });
  }

  async getTopCategories(): Promise<Category[]> {
    return await this.prismaService.category.findMany({
      take: this.config.categorySearchMaxResultCount
    });
  }
}

export { CategoryService };
