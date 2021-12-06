import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.options';
import { GrpcHelloworldService } from './grpc-helloworld.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GRPC_HELLOWORLD',
        ...grpcClientOptions,
      },
    ]),
  ],
  providers: [GrpcHelloworldService],
  exports: [GrpcHelloworldService],
})
export class GrpcHelloworldModule {}
