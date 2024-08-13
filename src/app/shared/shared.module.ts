import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldInputComponent } from './form-field/form-field-input/form-field-input.component';
import { FormFieldSelectComponent } from './form-field/form-field-select/form-field-select.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormFieldInputComponent,
    FormFieldSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormFieldInputComponent,
    FormFieldSelectComponent
  ],
})
export class SharedModule { }
