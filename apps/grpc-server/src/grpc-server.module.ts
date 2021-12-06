import { Module } from '@nestjs/common';
import { GrpcServerController } from './grpc-server.controller';
import { GrpcServerService } from './grpc-server.service';
import { HelloworldController } from './helloworld/helloworld.controller';

@Module({
  imports: [],
  controllers: [GrpcServerController, HelloworldController],
  providers: [GrpcServerService],
})
export class GrpcServerModule {}
