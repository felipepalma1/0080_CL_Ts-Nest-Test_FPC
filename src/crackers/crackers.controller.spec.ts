import { Test, TestingModule } from '@nestjs/testing';
import { CrackersController } from './crackers.controller';

describe('Crackers Controller', () => {
  let controller: CrackersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrackersController],
    }).compile();

    controller = module.get<CrackersController>(CrackersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
