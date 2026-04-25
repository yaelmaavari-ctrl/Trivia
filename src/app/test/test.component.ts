import { Component, input } from '@angular/core';
import { Question } from '../shared/question';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-test',
  imports: [QuestionComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  questions = input.required<Question[]>();

  }
