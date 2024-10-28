import { Component } from '@angular/core';
import { TaskServicesService } from 'src/app/services/task-services.service';
import { MatDialog } from '@angular/material/dialog'
import { CreateTaskComponent } from 'src/app/components/create-task/create-task.component';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: any
  statusTaskCall: 'success' | 'pending' | 'error' = 'pending'

  constructor(
    private taskServices: TaskServicesService,
    public dialog: MatDialog
  ){
    this.getTask()
  }

  getTask() {
    this.taskServices.getTask().subscribe({
      next: (result: any) => {
        if(result.success) {
          console.log('Petición exitosa');
          this.statusTaskCall = 'success';
        }
        this.tasks = result.response[0]
      },
      error: (error) => {
        console.log('Error en la petición');
        this.statusTaskCall = 'error';
        console.error(error)
      }
    })
  }

  taskCreate() {
    const dialogRef = this.dialog.open(CreateTaskComponent, { width: 'clamp(300px, 60%, 400px)', panelClass: 'form-task' });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }
}
