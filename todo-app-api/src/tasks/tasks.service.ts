import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

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

  // Create a Task
  createTask(task: any): any[] {
    if (task.title === '' || task.description === '') {
      throw new BadRequestException();
    }

    const taskToCreate: any = {
      id: new Date().getTime().toString(),
      title: task.title,
      description: task.description,
    };
    this.tasks.push(taskToCreate);
    return [...this.tasks];
  }

  // Get All Tasks
  getTasks(): any {
    return [...this.tasks];
  }

  // Get One Task
  getOneTask(id: string): any {
    const task = this.findTask(id);
    if (!task) {
      throw new NotFoundException();
    }
    return { ...task };
  }

  // Delete One Task
  deleteTask(id: string): string {
    const task = this.findTask(id);
    if (!task) {
      throw new NotFoundException();
    }
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    return id;
  }
  private findTask(id: string) {
    const task = this.tasks.find((t) => t.id == id);
    return task;
  }
}
