import { OverlayModule } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/app.models';
import { TooltipDirective } from 'src/app/directives/tooltip/tooltip.directive';
import { ChevronIconComponent } from '../icons/chevron/chevron.component';
import { QuestionIconComponent } from '../icons/question/question.component';
import { ProductsInputItemComponent } from '../products-input-item/products-input-item.component';
import { TooltipContentComponent } from '../tooltip-content/tooltip-content.component';

import { ProductsInputComponent } from './products-input.component';

describe('ProductsInputComponent', () => {
  let component: ProductsInputComponent;
  let fixture: ComponentFixture<ProductsInputComponent>;

  let products: Product[] = [
    {
      id: '27735fb3-fe69-4796-a021-e563a04ac770',
      name: 'Produkt 1',
      description: 'Najlepszy produkt 1',
    },
    {
      id: 'a723a0a8-3b1c-47aa-8e24-1172a41b1e1e',
      name: 'Produkt 2',
      description: 'Najlepszy produkt 2',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductsInputComponent,
        ProductsInputItemComponent,
        TooltipDirective,
        TooltipContentComponent,
        ChevronIconComponent,
        QuestionIconComponent,
      ],
      imports: [OverlayModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render toggle Button in header', () => {
    const fixture = TestBed.createComponent(ProductsInputComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('header button')).toBeTruthy();
  });

  it('should render Products with visible product name', () => {
    const fixture = TestBed.createComponent(ProductsInputComponent);
    fixture.componentInstance.products = products;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    products.forEach((product, index) => {
      expect(
        compiled.querySelectorAll('#content button')[index]?.textContent
      ).toContain(product.name);
    });
  });

  it('should set initial form value from writeValue method', () => {
    const fixture = TestBed.createComponent(ProductsInputComponent);
    fixture.componentInstance.products = products;
    fixture.componentInstance.writeValue(products[0]);
    expect(fixture.componentInstance._value).toBe(products[0]);
  });

  it('should update value on Product click', () => {
    const fixture = TestBed.createComponent(ProductsInputComponent);
    fixture.componentInstance.products = products;
    expect(fixture.componentInstance._value).toBeFalsy();
    fixture.componentInstance.onProductClick(products[0]);
    expect(fixture.componentInstance._value).toEqual(products[0]);
  });

  it('should emit change control event when Product clicked', () => {
    const fixture = TestBed.createComponent(ProductsInputComponent);
    fixture.detectChanges();
    const spy = spyOn(fixture.componentInstance, '_onChange');
    fixture.componentInstance.products = products;
    fixture.componentInstance.onProductClick(products[1]);

    expect(spy).toHaveBeenCalledWith(products[1]);
  });

  it('should mark active Product', () => {
    const fixture = TestBed.createComponent(ProductsInputComponent);
    fixture.componentInstance.products = products;
    fixture.componentInstance.onProductClick(products[1]);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#content button.active')).toBeTruthy();
    expect(
      compiled.querySelector('#content button.active')?.textContent
    ).toContain(products[1].name);
  });
});
