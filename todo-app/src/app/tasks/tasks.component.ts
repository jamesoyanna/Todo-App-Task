import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[] = [];
  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  // Get Task
  getTasks(){
    this.tasksService.getTasks()
    .subscribe(
      (response: Task[]) => {
     this.tasks = response
      },
      error => {
        console.log(error)
      }
    )
  }

  // Edit Task
  editTask(task: Task){
    
  }

}
