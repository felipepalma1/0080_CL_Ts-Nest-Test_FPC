import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { NiggasController } from './niggas/niggas.controller';
import { CrackersController } from './crackers/crackers.controller';
import { SnusnuController } from './snusnu/snusnu.controller';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/tasks.service'

@Module({
  imports: [TasksModule],
  controllers: [AppController, CatsController, NiggasController, CrackersController, SnusnuController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
