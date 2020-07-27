import { Test, TestingModule } from '@nestjs/testing';
import { SnusnuController } from './snusnu.controller';

describe('Snusnu Controller', () => {
  let controller: SnusnuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnusnuController],
    }).compile();

    controller = module.get<SnusnuController>(SnusnuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
