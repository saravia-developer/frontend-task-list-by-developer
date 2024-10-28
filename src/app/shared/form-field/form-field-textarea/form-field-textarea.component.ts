import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-field-textarea',
  templateUrl: './form-field-textarea.component.html',
  styleUrls: ['./form-field-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldTextareaComponent),
      multi: true
    }
  ],
})
export class FormFieldTextareaComponent {

  @Input() label: string = "";
  @Input() identification: string = "";
  @Input() text: string = "";
  @Input() name: string = "";
  @Input() placeholder: string = "";

  formControl = new FormControl('');

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.formControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Aquí puedes manejar el estado de deshabilitado del input
  }

  // Método para manejar el cambio de valor
  onInputChange(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    const value = target.value
    this.formControl.setValue(value)
    this.onChange(value);
    this.onTouched();
  }

}
