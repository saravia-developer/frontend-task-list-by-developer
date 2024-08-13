import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITask } from 'src/app/interface/task.interface';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  task: ITask

  constructor (
    @Inject(MAT_DIALOG_DATA) public data: { task: ITask },
    public dialogRef: MatDialogRef<TaskDetailsComponent>
  ){
    this.task = data.task
  }
}
