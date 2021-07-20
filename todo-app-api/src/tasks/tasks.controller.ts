import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // Create tasks
  @Post()
  createTask(@Body() body: any[]) {
    return this.tasksService.createTask(body);
  }

  // Get Tasks
  @Get()
  getTasks(): any[] {
    return this.tasksService.getTasks();
  }

  // Get one task
  @Get(':id')
  getOneTask(@Param('id') id: string): any {
    return this.tasksService.getOneTask(id);
  }

  // Delete Task
  @Delete(':id')
  deleteTask(@Param('id') id: string): string {
    return this.tasksService.deleteTask(id);
  }
}
