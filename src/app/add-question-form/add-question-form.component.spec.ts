import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionFormComponent } from './add-question-form.component';

describe('AddQuestionFormComponent', () => {
  let component: AddQuestionFormComponent;
  let fixture: ComponentFixture<AddQuestionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddQuestionFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddQuestionFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
