import { OverlayModule } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ChevronIconComponent } from './components/icons/chevron/chevron.component';
import { QuestionIconComponent } from './components/icons/question/question.component';
import { ProductsInputItemComponent } from './components/products-input-item/products-input-item.component';
import { ProductsInputComponent } from './components/products-input/products-input.component';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, OverlayModule],
      declarations: [
        AppComponent,
        ProductsInputComponent,
        ProductsInputItemComponent,
        TooltipDirective,
        ChevronIconComponent,
        QuestionIconComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FORMULARZ'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FORMULARZ');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'FORMULARZ'
    );
  });
});
