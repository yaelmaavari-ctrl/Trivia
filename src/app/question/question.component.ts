import { Component, input } from '@angular/core';
import { Question } from '../shared/question';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {

  question = input.required<Question>();

  onAnswer(ans: string) {
    if (this.question().checkAnswer(ans)) {
      alert('תשובה נכונה!');
    } else {
      alert('תשובה שגויה, נסי שוב.');
    }
  }
}



