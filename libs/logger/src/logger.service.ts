import Pino from 'pino';
import { Injectable, Scope, LoggerService } from '@nestjs/common';

const { NODE_ENV } = process.env;
const pino = Pino({
  transport: {
    targets: [
      NODE_ENV !== 'production' && {
        target: 'pino-pretty',
        options: {
          colorize: true,
          destination: 1,
          translateTime: true,
          ignore: 'pid,hostname',
        },
        level: 'debug',
      },
    ],
  },
});

@Injectable({ scope: Scope.TRANSIENT })
export class Logger implements LoggerService {
  /**
   * Write a 'info' level log.
   */
  log(message: string, ...optionalParams: any[]) {
    pino.info(message, ...optionalParams);
  }

  /**
   * Write a 'info' level log.
   */
  info(message: string, ...optionalParams: any[]) {
    pino.info(message, ...optionalParams);
  }

  /**
   * Write an 'error' level log.
   */
  error(message: string, ...optionalParams: any[]) {
    pino.error(message, ...optionalParams);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: string, ...optionalParams: any[]) {
    pino.warn(message, ...optionalParams);
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: string, ...optionalParams: any[]) {
    pino.debug(message, ...optionalParams);
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {
    pino.trace(message, ...optionalParams);
  }
}
