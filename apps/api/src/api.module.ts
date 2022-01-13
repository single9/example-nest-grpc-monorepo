import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { LoggerModule } from '@app/logger';
import { GrpcHelloworldModule } from '@app/grpc-helloworld';

@Module({
  imports: [GrpcHelloworldModule, LoggerModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
