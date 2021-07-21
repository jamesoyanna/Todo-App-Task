import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    MatToolbarModule,
     MatCardModule,
    MatListModule,
    MatIconModule,
    MatTableModule
  ]
})
export class SharedModule { }
