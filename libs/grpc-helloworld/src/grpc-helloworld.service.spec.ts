import { ClientsModule } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { grpcClientOptions } from './grpc-client.options';
import { GrpcHelloworldService } from './grpc-helloworld.service';

describe('GrpcHelloworldService', () => {
  let service: GrpcHelloworldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          {
            name: 'GRPC_HELLOWORLD',
            ...grpcClientOptions,
          },
        ]),
      ],
      providers: [GrpcHelloworldService],
    }).compile();

    service = module.get<GrpcHelloworldService>(GrpcHelloworldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
