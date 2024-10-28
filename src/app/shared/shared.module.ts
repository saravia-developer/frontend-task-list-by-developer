import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldInputComponent } from './form-field/form-field-input/form-field-input.component';
import { FormFieldSelectComponent } from './form-field/form-field-select/form-field-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldTextareaComponent } from './form-field/form-field-textarea/form-field-textarea.component';



@NgModule({
  declarations: [
    FormFieldInputComponent,
    FormFieldSelectComponent,
    FormFieldTextareaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormFieldInputComponent,
    FormFieldSelectComponent,
    FormFieldTextareaComponent
  ],
})
export class SharedModule { }
