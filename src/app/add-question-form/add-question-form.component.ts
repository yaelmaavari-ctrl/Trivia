import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from '../shared/question';

@Component({
  selector: 'app-add-question-form',
  imports: [FormsModule],
  templateUrl: './add-question-form.component.html',
  styleUrl: './add-question-form.component.scss',
})
export class AddQuestionFormComponent {
  newQtext = '';
  newAnswers = ['', '', '', ''];
  correctIdx = 0;

  
  onQuestionAdded = output<Question>();

  save() {
    const q = new Question(this.newQtext, [...this.newAnswers], this.correctIdx);
    console.log('הבן משדר שאלה:', q);
    this.onQuestionAdded.emit(q);
    // איפוס טופס
    this.newQtext = '';
    this.newAnswers = ['', '', '', ''];
  }
}
