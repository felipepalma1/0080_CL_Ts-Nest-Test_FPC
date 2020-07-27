import { Test, TestingModule } from '@nestjs/testing';
import { NiggasController } from './niggas.controller';

describe('Niggas Controller', () => {
  let controller: NiggasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NiggasController],
    }).compile();

    controller = module.get<NiggasController>(NiggasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
