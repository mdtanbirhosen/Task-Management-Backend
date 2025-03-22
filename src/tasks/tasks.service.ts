import { Injectable } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // getTaskById(id: string): Task {
    //     const task = this.tasks.find((task) => task.id === id);
    //     if (!task) {
    //         throw new Error(`Task with ID ${id} not found`);
    //     }
    //     return task;
    // }
    

    // createTask(createTaskDto: CreateTaskDto): Task {
    //     const {title, description} = createTaskDto
    //     const task :Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     }
    //     this.tasks.push(task);
    //     return task;
    // }

    // deleteTaskById(id: string){
    //     const deletedTask = this.tasks.find((task)=> task.id === id);
        
    //     this.tasks = this.tasks.filter((task)=> task.id!== id);
    //     return deletedTask
    // }
}