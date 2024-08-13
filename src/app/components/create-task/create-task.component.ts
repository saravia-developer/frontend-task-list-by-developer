import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ICreateTask } from 'src/app/interface/task.interface';
import { CategoryService } from 'src/app/services/category.service';
import { TaskServicesService } from 'src/app/services/task-services.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {

  taskCreationForm: FormGroup
  viewDialogTaskCreation = false

  categoryOptions = []

  constructor(
    private formBuilder: FormBuilder,
    private categoryServices: CategoryService,
    private taskServices: TaskServicesService,
    private router: Router,
    public dialogRef: MatDialogRef<CreateTaskComponent>
  ){
    this.taskCreationForm = this.createFormTask()
    this.getCategory()
  }

  createFormTask() {
    return this.formBuilder.group({
      title: [ '', [Validators.required, Validators.minLength(2)] ],
      description: [ '', Validators.required ],
      timeEstimated: [ 0, [Validators.required] ],
      category: [ 0, [Validators.required] ]
    })
  }

  closeDialog() {
    this.dialogRef.close()
  }

  getCategory() {
    this.categoryServices.getCategory().subscribe(
      (res: any) => {
        const { response } = res;
        this.categoryOptions = response[0]
      },
    )
  }

  viewData() {
    console.log(this.taskCreationForm.value);

    const { title, description, timeEstimated, category } = this.taskCreationForm.value;

    const body: ICreateTask = {
      nameTask: title,
      description,
      isCompleted: false,
      estimatedTime: timeEstimated,
      category
    };

    this.taskServices.createTask(body).subscribe(res => { console.log('Tarea Creada'); this.router.url === '/' ? window.location.reload() : this.router.navigate(['/']); })

  }
}
