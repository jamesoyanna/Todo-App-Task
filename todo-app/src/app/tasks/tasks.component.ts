import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from './../task-dialog/task-dialog.component';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[] = [];
  constructor(
    private tasksService: TasksService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  // Get Task
  getTasks(): void {
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
  editTask(task: Task): void{
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '600px',
      data: {
        task
      }
    })
    dialogRef.afterClosed().subscribe(
      (result: any) =>{
       if(!result){
         return 
       }
       this.tasksService.editTask(result.task)
       .subscribe(
         (response: Task) => {
           console.log('Edited Task', response)
         },
         error => {
           console.log(error)
         }
       )
      }
    )
  }

  // Delete Task
  deleteTask(task: Task): void {
   this.tasksService.deleteTask(task)
   .subscribe(
     (response: string) => {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index,1)
     },
     error => {
       console.log(error)
     }
   )
  }

}
