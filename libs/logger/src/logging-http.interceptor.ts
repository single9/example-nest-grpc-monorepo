import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getHandlerInfo } from './utils';
import logger from './logger';

@Injectable()
export class LoggingHttpInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        logger.info(`${getHandlerInfo(context)} ${Date.now() - now}ms`);
      }),
    );
  }
}
