import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-field-input',
  templateUrl: './form-field-input.component.html',
  styleUrls: ['./form-field-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldInputComponent),
      multi: true
    }
  ]
})
export class FormFieldInputComponent {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  @Input() name: string = "";
  @Input() identification: string = "";
  @Input() formControlName: string = "";

  value: any

  formControl = new FormControl('')

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Aquí puedes manejar el estado de deshabilitado del input
  }

  // Método para manejar el cambio de valor
  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

}
