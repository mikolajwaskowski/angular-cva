import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Product } from 'src/app/app.models';

@Component({
  selector: 'app-products-input',
  templateUrl: './products-input.component.html',
  styleUrls: ['./products-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ProductsInputComponent),
    },
  ],
})
export class ProductsInputComponent implements ControlValueAccessor {
  _value: Product | null = null;

  @Input() products: Product[] = [];

  private _onChange(_: Product) {}
  private _onTouched(_: Product) {}

  onProductClick(value: Product): void {
    this._value = value;
  }

  writeValue(value: Product): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  trackById = (_: number, item: { id: string }) => item.id;
}
