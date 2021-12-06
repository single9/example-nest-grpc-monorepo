import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { GrpcHelloworldModule } from '@app/grpc-helloworld';

@Module({
  imports: [GrpcHelloworldModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
