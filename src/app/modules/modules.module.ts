import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ModulesRoutingModule } from './modules-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { ComponentsModule } from '../components/components.module';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskDetailsComponent } from '../components/task-details/task-details.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ComponentsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class ModulesModule { }
