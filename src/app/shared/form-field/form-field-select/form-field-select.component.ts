import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-field-select',
  templateUrl: './form-field-select.component.html',
  styleUrls: ['./form-field-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldSelectComponent),
      multi: true
    }
  ]
})
export class FormFieldSelectComponent {
  @Input() label: string = "";
  @Input() identification: string = "";
  @Input() name: string = "";
  @Input() options: any[] = [];
  // @Input() formControlName: string = "";

  value: any

  formControl = new FormControl('')

  private onChange = (value: any) => {};
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
  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.selectedOptions[0].value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
