import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Product } from 'src/app/app.models';

@Component({
  selector: 'app-products-input-item',
  templateUrl: './products-input-item.component.html',
  styleUrls: ['./products-input-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsInputItemComponent implements OnInit {
  @Input() product: Product | undefined;
  @Input() isActive = false;

  constructor() {}

  ngOnInit(): void {}
}
