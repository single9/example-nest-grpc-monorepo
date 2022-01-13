import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ApiModule } from './api.module';
import { Logger } from '@app/logger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    ApiModule,
    new FastifyAdapter(),
    {
      bufferLogs: true,
      logger: new Logger(),
    },
  );
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
