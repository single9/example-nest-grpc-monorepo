import { Module } from '@nestjs/common';
import { HelloworldController } from './helloworld/helloworld.controller';
import { LoggerModule } from '@app/logger';

@Module({
  imports: [LoggerModule],
  controllers: [HelloworldController],
  providers: [],
})
export class GrpcServerModule {}
