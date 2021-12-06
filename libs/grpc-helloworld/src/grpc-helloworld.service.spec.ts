import { Test, TestingModule } from '@nestjs/testing';
import { GrpcHelloworldService } from './grpc-helloworld.service';

describe('GrpcHelloworldService', () => {
  let service: GrpcHelloworldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrpcHelloworldService],
    }).compile();

    service = module.get<GrpcHelloworldService>(GrpcHelloworldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
