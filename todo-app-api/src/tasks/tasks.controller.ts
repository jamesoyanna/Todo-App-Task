import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

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
}
