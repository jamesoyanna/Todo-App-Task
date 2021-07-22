import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: '1',
      title: 'Call Gas Station',
      description: 'Call the gas station to supply gas',
    },
    {
      id: '2',
      title: 'Finish Work on Enterprise App',
      description: 'Do a complete work on the enterprise application',
    },
    {
      id: '3',
      title: 'Attend Next Movie Star',
      description: 'Prepare to attend the next movie start event',
    },
    {
      id: '4',
      title: 'Schedule standup meeting',
      description:
        'Schedule and notify all team member on the upcoming standup meeting',
    },
    {
      id: '5',
      title: 'Visit Shoprite Mall',
      description: 'Prepare to visit and do some shopping at shopprite mall',
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
    const index = await this.tasks.findIndex((t) => t.id === id);
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

  // Search Tasks
  async searchTask(title: string): Promise<Task> {
    const task = await this.tasks.find((t) => t.title == title);
    return task;
  }
}
