import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {
  tasks: any[] = [
    { id: 1, title: 'welcome back', description: 'simple task app' },
    {
      id: 2,
      title: 'Barbing my hair',
      description: 'I will be going to barb hair',
    },
    {
      id: 3,
      title: 'watch  movie',
      description: 'Netflix movie is the surest',
    },
  ];

  // Get All Tasks
  getTasks(): any {
    return [...this.tasks];
  }

  // Get One Task
  getOneTask(id: string): any {
    const task = this.tasks.find((t) => t.id == id);
    if (!task) {
      return new NotFoundException();
    }
    return { ...task };
  }
}
