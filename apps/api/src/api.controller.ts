import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ApiService } from './api.service';
import { GrpcHelloworldService } from '@app/grpc-helloworld';
import { LoggingHttpInterceptor } from '@app/logger';

@Controller()
@UseInterceptors(LoggingHttpInterceptor)
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    private readonly grpcGreeter: GrpcHelloworldService,
  ) {}

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }

  @Get(':name')
  sayHello(@Param('name') name: string) {
    return this.grpcGreeter.sayHello(name);
  }
}
