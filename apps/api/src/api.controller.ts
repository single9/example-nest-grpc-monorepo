import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from './api.service';
import { GrpcHelloworldService } from '@app/grpc-helloworld';

@Controller()
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
