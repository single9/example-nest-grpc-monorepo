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
export class LoggingRpcInterceptor implements NestInterceptor {
  constructor(private logger: Logger) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const data = JSON.stringify(context.switchToRpc().getData());
    const ctx = JSON.stringify(context.switchToRpc().getContext());
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        const str = `${getHandlerInfo(context)} - ${data} - ${ctx} ${
          Date.now() - now
        }ms`;
        this.logger.info(str);
      }),
    );
  }
}
