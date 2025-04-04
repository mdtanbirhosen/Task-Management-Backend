import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  // getAllTasks(): Task[] {
  //     return this.tasks;
  // }

  async getTaskById(id: string): Promise<Task>{
    const find = await this.taskRepository.findOne({where: {id}})
    if(!find){
        throw new NotFoundException(' task not found')
    }
    return find
  }

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
