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
export class LoggingRpcInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const data = JSON.stringify(context.switchToRpc().getData());
    const ctx = JSON.stringify(context.switchToRpc().getContext());

    logger.info(`${getHandlerInfo(context)} - ${data} - ${ctx}`);

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => logger.info(`After... ${Date.now() - now}ms`)));
  }
}
