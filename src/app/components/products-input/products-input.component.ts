import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Product } from 'src/app/app.models';

@Component({
  selector: 'app-products-input',
  templateUrl: './products-input.component.html',
  styleUrls: ['./products-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsInputComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor() {}

  trackById = (_: number, item: { id: string }) => item.id;

  ngOnInit(): void {}
}
