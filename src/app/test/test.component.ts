import { Component, Signal, inject } from '@angular/core'; 
import { Question } from '../shared/question';
import { QuestionComponent } from '../question/question.component';
import { QuestionsService } from '../shared/questions.service';
import { QuestionsAPIService } from '../shared/questions-api.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  questions?: Question[];
  constructor(
    private readonly svc: QuestionsService,
    private readonly realAPI: QuestionsAPIService,
  ) {


    realAPI.getAllQuestions().subscribe({
      next:(questionsList) => {
        this.questions = questionsList;      
      },
      error: (err) => alert(err.message)
    })
}
}


