import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadListTasksComponent } from './head-list-tasks/head-list-tasks.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HeadListTasksComponent,
    SingleTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    HeadListTasksComponent,
    SingleTaskComponent,
    CreateTaskComponent
  ],
})
export class ComponentsModule {}
