import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionIconComponent } from './question.component';

describe('QuestionIconComponent', () => {
  let component: QuestionIconComponent;
  let fixture: ComponentFixture<QuestionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
