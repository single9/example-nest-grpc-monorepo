import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { helloworld } from './grpc/rpc';

@Injectable()
export class GrpcHelloworldService implements OnModuleInit {
  private greeterService: helloworld.Greeter;
  constructor(@Inject('GRPC_HELLOWORLD') private client: ClientGrpc) {}
  onModuleInit() {
    this.greeterService = this.client.getService<helloworld.Greeter>('Greeter');
  }

  sayHello(name: string) {
    const grpc_request = new helloworld.HelloRequest({ name });
    return this.greeterService.sayHello(grpc_request);
  }

  sayNested() {
    return this.greeterService.sayNested({});
  }
}
