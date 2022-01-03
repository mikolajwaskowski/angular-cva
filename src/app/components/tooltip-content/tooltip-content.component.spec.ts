import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipContentComponent } from './tooltip-content.component';

describe('TooltipContentComponent', () => {
  let component: TooltipContentComponent;
  let fixture: ComponentFixture<TooltipContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooltipContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', () => {
    const fixture = TestBed.createComponent(TooltipContentComponent);
    fixture.componentInstance.text = 'Test 1';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain('Test 1');
  });
});
