import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './topbar/topbar.component';
import { SharedModule } from './shared/shared.module';
import { TasksComponent } from './tasks/tasks.component';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    TasksComponent
  ],
  imports: [
 
  BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
