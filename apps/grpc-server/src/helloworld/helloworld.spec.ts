import { Test, TestingModule } from '@nestjs/testing';
import { HelloworldController } from './helloworld.controller';
import { helloworld } from '@app/grpc-helloworld';

describe('HelloworldController', () => {
  let helloworldController: HelloworldController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloworldController],
    }).compile();

    helloworldController = app.get<HelloworldController>(HelloworldController);
  });

  describe('root', () => {
    it('should return "Hello Stranger, Welcome!!!"', () => {
      const req = new helloworld.HelloRequest({ name: 'Stranger' });
      expect(helloworldController.sayHello(req)).toHaveProperty(
        'message',
        'Hello Stranger, Welcome!!!',
      );
    });

    it('should return NestedReply', () => {
      expect(helloworldController.sayNested()).toEqual({
        x: {
          name: 'test x',
          c: {
            cname: 'from c',
            d: { dname: 'to d in' },
            anums: [1, 2, 3, 4, 5, 6],
            snums: 1.1234,
          },
          d: { dname: 'to d out' },
        },
      });
    });
  });
});
