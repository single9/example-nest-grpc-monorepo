import { Module } from '@nestjs/common';
import { HelloworldController } from './helloworld/helloworld.controller';

@Module({
  imports: [],
  controllers: [HelloworldController],
  providers: [],
})
export class GrpcServerModule {}
