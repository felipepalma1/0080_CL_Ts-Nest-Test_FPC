import { Injectable } from '@nestjs/common';
import { Task, TasksStatus } from './task.model';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    /*Se expone un método para poder tener acceso a la propiedad tasks, que actualmente es privada*/
    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(title: string, description: string): Task {
        const task: Task = {
            id: uuidv4(),
            title: title,
            description: description,
            status: TasksStatus.OPEN
        };

        this.tasks.push(task);
        console.log('Entrada de usuario creada con éxito');
        return task;
    }
}
