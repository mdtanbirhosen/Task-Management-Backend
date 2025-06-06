import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // @Get()
  // getAllTasks(): Task[] {
  //   return this.taskService.getAllTasks();
  // }

  @Get(':id')
  getTaskById(@Param('id') id:string): Promise<Task>{
    return this.taskService.getTaskById(id);
  }

  // @Get(':id')
  // getTaskById(@Param('id') id:string):Task {
  //   return this.taskService.getTaskById(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
    
  //   return this.taskService.createTask(createTaskDto);
  // }

  // @Delete(':id')
  // deleteTaskById(@Param('id') id: string){
  //   return this.taskService.deleteTaskById(id)
  // }
}
