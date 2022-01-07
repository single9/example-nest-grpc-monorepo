import * as util from 'util';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

const {
  NODE_ENV = 'development',
  LOG_LEVEL = 'debug',
  ES_ENABLED = 'false',
} = process.env;

const { format, transports } = winston;
const logFormat = format.printf(
  (info) => `${info.timestamp} ${info.level} : ${util.format(info.message)}`,
);
const esEnabled = ES_ENABLED === 'true';

const logger = winston.createLogger({
  level:
    (NODE_ENV === 'test' && '[]') ||
    (NODE_ENV === 'production' ? 'info' : LOG_LEVEL),
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    // Format the metadata object
    format.metadata({
      fillExcept: ['message', 'level', 'timestamp', 'label'],
    }),
    format.prettyPrint(),
  ),
  transports: [
    new winston.transports.DailyRotateFile({
      level: 'error',
      format: format.combine(format.json()),
      filename: 'logs/%DATE%-error.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
    new winston.transports.DailyRotateFile({
      format: format.combine(format.json()),
      filename: 'logs/%DATE%-combined.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

if (!esEnabled && NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), logFormat),
    }),
  );
}

export default logger;
