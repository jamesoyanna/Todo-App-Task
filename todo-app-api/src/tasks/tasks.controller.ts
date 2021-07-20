import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // Create tasks
  @Post()
  async createTask(@Body() body: Task): Promise<Task[]> {
     const tasks = await this.tasksService.createTask(body);
     return tasks;
  }

  // Get Tasks
  @Get()
  async getTasks(): Promise<Task[]> {
     const tasks = await this.tasksService.getTasks();
     return tasks;
  }

  // Get one task
  @Get(':id')
  async getOneTask(@Param('id') id: string): Promise<Task> {
    const task = await this.tasksService.getOneTask(id);
     return task;
  }

  // Update Task
  @Patch(':id')
  async updateTask(@Param('id') id: string, @Body() body: Task): Promise<Task> {
    const task = await this.tasksService.updateTask(id, body);
    return task;
  }

  // Delete Task
  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<string> {
    const taskId = this.tasksService.deleteTask(id);
    return taskId;
  }
}
