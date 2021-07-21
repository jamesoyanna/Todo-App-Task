import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import {Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  // Get Tasks
  getTasks(): Observable<Task[] | any>{
  return this.http.get(`${this.apiUrl}/tasks`)
  }

  // Edit Task
  editTask(task: Task): Observable<Task | any>{
    return this.http.patch(`${this.apiUrl}/tasks/${task.id}`, task)
  } 
}
