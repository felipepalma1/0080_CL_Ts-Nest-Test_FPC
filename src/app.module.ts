import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { NiggasController } from './niggas/niggas.controller';
import { CrackersController } from './crackers/crackers.controller';
import { SnusnuController } from './snusnu/snusnu.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, NiggasController, CrackersController, SnusnuController],
  providers: [AppService],
})
export class AppModule {}
