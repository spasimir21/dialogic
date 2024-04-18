import { SuppressErrorNotificationConfig, sendErrorToNotification } from './errorToNotification';
import { authEndpoints, serviceAuthenticatedExecutor } from './auth';
import { ProductDto } from '@services/product/dto/ProductDto';
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
  service,
  toHttpError,
  withConfig
} from '@libs/client/requestr';

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
  {}
);

const requests = endpoints(
  withConfig<SuppressErrorNotificationConfig>({
    request: fetchInit,
    response: catchHttpError,
    error: combine(toHttpError, sendErrorToNotification)
  }),
  { product, category, auth: authEndpoints }
);

export { requests };

