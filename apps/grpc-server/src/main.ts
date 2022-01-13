import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';
import { GrpcServerModule } from './grpc-server.module';
import { Logger } from '@app/logger';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GrpcServerModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'helloworld',
        protoPath: join(__dirname, '../../../protos/helloworld/hello.proto'),
        // !!! IMPORTANT: this is required !!!
        // Default: localhost:5000 will not work in Docker!
        url: '0.0.0.0:5000',
      },
      bufferLogs: true,
      logger: new Logger(),
    },
  );
  await app.listen();
}
bootstrap();
