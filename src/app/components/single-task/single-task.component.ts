import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ITask } from 'src/app/interface/task.interface';
import { TaskServicesService } from 'src/app/services/task-services.service';
import { TaskDetailsComponent } from '../task-details/task-details.component';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent {
  @Input() task!: ITask

  constructor(
    private taskService: TaskServicesService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  taskCompleted(id: number) {
    this.taskService.deleteTask(Number(id)).subscribe(res => {
      console.log('Tarea Eliminada');
      this.router.url === '/' ? window.location.reload() : this.router.navigate(['/'])
    })
  }

  taskDetails(task: ITask){
    const dialogRef = this.dialog.open(TaskDetailsComponent, { width: 'clamp(300px, 60%, 500px)', data: { task } });
    console.log(' Me hicieron click')
  }
}
