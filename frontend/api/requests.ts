import { SuppressErrorNotificationConfig, sendErrorToNotification } from './errorToNotification';
import { Category } from '@services/category/interface/category.interface';
import { authEndpoints, serviceAuthenticatedExecutor } from './auth';
import { ProductDto } from '@services/product/dto/product.dto';
import { Service } from './services';
import {
  catchHttpError,
  combine,
  endpoint,
  endpoints,
  fetchInit,
  get,
  jsonBody,
  jsonResponse,
  path,
  post,
  query,
  service,
  toHttpError,
  withConfig
} from '@libs/client/requestr';
import { CategoryNamesDto } from '@services/category/dto/categoryNames.dto';

const product = endpoints(
  {
    request: service(Service.Product)
  },
  {
    getAll: endpoint<void, ProductDto[]>({
      request: combine(get, path('/products')),
      response: jsonResponse
    }),
    create: endpoint<ProductDto, void>({
      request: combine(post, path('/'), jsonBody),
      executor: serviceAuthenticatedExecutor(Service.Product)
    })
  }
);

const category = endpoints(
  {
    request: service(Service.Category)
  },
  {
    searchCategories: endpoint<string, string[]>({
      request: combine(
        get,
        path('/search'),
        query<string>('search', search => search)
      ),
      response: jsonResponse
    }),
    // TODO: Remove later
    ensureCategories: endpoint<CategoryNamesDto, Category[]>({
      request: combine(post, path('/ensure'), jsonBody),
      executor: serviceAuthenticatedExecutor(Service.Category),
      response: jsonResponse
    })
  }
);

const debate = endpoints(
  {
    request: service(Service.Debate)
  },
  {}
);

const requests = endpoints(
  withConfig<SuppressErrorNotificationConfig>({
    request: fetchInit,
    response: catchHttpError,
    error: combine(toHttpError, sendErrorToNotification)
  }),
  { product, category, debate, auth: authEndpoints }
);

export { requests };
