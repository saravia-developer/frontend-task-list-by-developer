import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadListTasksComponent } from './head-list-tasks/head-list-tasks.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
<<<<<<< HEAD
import { MatSelectModule } from '@angular/material/select';
import { CategoriesComponent } from './categories/categories.component';
=======
>>>>>>> e557499acfdaaacea449b6e5400643e761ae857a

@NgModule({
  declarations: [
    HeadListTasksComponent,
    SingleTaskComponent,
    CreateTaskComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [
    HeadListTasksComponent,
    SingleTaskComponent,
    CreateTaskComponent,
    CategoriesComponent
  ],
})
export class ComponentsModule {}
