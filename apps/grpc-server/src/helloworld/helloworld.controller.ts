import { Controller, UseGuards, UseInterceptors } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { helloworld } from '@app/grpc-helloworld';
import { NameValidator } from './name-validator.guard';
import { LoggingRpcInterceptor } from '@app/logger';

@Controller()
@UseInterceptors(LoggingRpcInterceptor)
export class HelloworldController {
  @GrpcMethod('Greeter', 'SayHello')
  @UseGuards(NameValidator)
  sayHello(data: helloworld.HelloRequest): helloworld.HelloReply {
    const name = data.name;
    const response = new helloworld.HelloReply();
    response.message = `Hello ${name}, Welcome!!!`;
    return response;
  }

  @GrpcMethod('Greeter', 'SayNested')
  sayNested(): helloworld.NestedReplyA {
    const response = new helloworld.NestedReplyA({
      x: {
        name: 'test x',
        c: {
          cname: 'from c',
          anums: [1, 2, 3, 4, 5, 6],
          snums: 1.1234,
          d: {
            dname: 'to d in',
          },
        },
        d: {
          dname: 'to d out',
        },
      },
    });

    return response;
  }
}
