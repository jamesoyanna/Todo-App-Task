import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';


import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    TasksComponent,
    TaskDialogComponent
  ],
  imports: [
  BrowserModule,
   FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,


   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
