import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    { id: 'abc', title: 'welcome back', description: 'simple task app' },
    {
      id: 'def',
      title: 'Barbing my hair',
      description: 'I will be going to barb hair',
    },
    {
      id: 'ghi',
      title: 'watch  movie',
      description: 'Netflix movie is the surest',
    },
  ];

  // Create a Task
  async createTask(task: Task): Promise<Task[]> {
    if (task.title === '' || task.description === '') {
      throw new BadRequestException();
    }

    const taskToCreate: Task = await {
      id: new Date().getTime().toString(),
      title: task.title,
      description: task.description,
    };
    this.tasks.push(taskToCreate);
    return [...this.tasks];
  }

  // Get All Tasks
  async getTasks(): Promise<Task[]> {
    return await [...this.tasks];
  }

  // Get One Task
  async getOneTask(id: string): Promise<Task> {
    const task = await this.findTask(id);
    if (!task) {
      throw new NotFoundException();
    }
    return { ...task };
  }

  // Update Task
  async updateTask(id: string, task: Task): Promise<Task> {
    if (task.title === '' || task.description === '') {
      throw new BadRequestException();
    }
    const index = await this.tasks.findIndex(t => t.id === id);
    this.tasks[index] = { ...this.tasks[index], ...task };
    return { ...this.tasks[index] };
  }

  // Delete One Task
  async deleteTask(id: string): Promise<string> {
    const task = await this.findTask(id);
    if (!task) {
      throw new NotFoundException();
    }
    const index = await this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    return id;
  }
  private async findTask(id: string): Promise<Task> {
    const task = await this.tasks.find((t) => t.id == id);
    return task;
  }
}
