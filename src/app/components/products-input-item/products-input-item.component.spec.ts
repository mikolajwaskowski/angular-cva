import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInputItemComponent } from './products-input-item.component';

describe('ProductsInputItemComponent', () => {
  let component: ProductsInputItemComponent;
  let fixture: ComponentFixture<ProductsInputItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsInputItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsInputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
