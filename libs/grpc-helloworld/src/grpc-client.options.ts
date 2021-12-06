import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'helloworld',
    protoPath: join(__dirname, '../../../protos/helloworld/hello.proto'),
  },
};
