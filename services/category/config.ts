import { ConfigProvider, ConfigSymbol } from '@libs/server/config';

interface CategoryConfig {}

const CategoryConfig = ConfigSymbol('category');

const CategoryConfigProvider = ConfigProvider('./config/category.yml', CategoryConfig);

export { CategoryConfig, CategoryConfigProvider };

