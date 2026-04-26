import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from '../shared/question';
import { QuestionsService } from '../shared/questions.service';

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

  constructor(private readonly questionsService: QuestionsService) {}
  save() {
    const q = new Question(this.newQtext, [...this.newAnswers], this.correctIdx);
    
    this.questionsService.addQuestion(q);
    
    this.newQtext = '';
    this.newAnswers = ['', '', '', ''];
    this.correctIdx = 0;
  }
}
