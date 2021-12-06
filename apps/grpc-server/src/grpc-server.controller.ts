import { Controller, Get } from '@nestjs/common';
import { GrpcServerService } from './grpc-server.service';

@Controller()
export class GrpcServerController {
  constructor(private readonly grpcServerService: GrpcServerService) {}

  @Get()
  getHello(): string {
    return this.grpcServerService.getHello();
  }
}
