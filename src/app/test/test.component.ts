// import { Component, inject } from '@angular/core'; // הוסיפי את inject כאן
// import { Question } from '../shared/question';
// import { QuestionComponent } from '../question/question.component';
// import { QuestionsService } from '../shared/questions.service';

// @Component({
//   selector: 'app-test',
//   imports: [QuestionComponent],
//   templateUrl: './test.component.html',
//   styleUrl: './test.component.scss',
// })
// export class TestComponent {
//   // questions = input.required<Question[]>();
// // הזרקת הסרוויס
//   private questionsService = inject(QuestionsService);

//   // חשיפת השאלות ל-HTML (קריאה לפונקציית ה-get מהסרוויס)
//   questions = this.quizService.getQuestions();
//   }




import { Component, Signal } from '@angular/core'; 
import { Question } from '../shared/question';
import { QuestionComponent } from '../question/question.component';
import { QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './test.component.html'
})
export class TestComponent {
  questions: Signal<Question[]>;

  constructor(private readonly questionsService: QuestionsService) {
    this.questions = this.questionsService.questions;
  }
}