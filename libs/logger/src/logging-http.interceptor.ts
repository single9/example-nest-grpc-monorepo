import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getHandlerInfo } from './utils';
import { Logger } from './logger.service';

@Injectable()
export class LoggingHttpInterceptor implements NestInterceptor {
  constructor(private logger: Logger) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        this.logger.info(`${getHandlerInfo(context)} ${Date.now() - now}ms`);
      }),
    );
  }
}
