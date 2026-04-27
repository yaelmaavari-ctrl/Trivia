// import { Component, output } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Question } from '../shared/question';
// import { QuestionsService } from '../shared/questions.service';

// @Component({
//   selector: 'app-add-question-form',
//   imports: [FormsModule],
//   templateUrl: './add-question-form.component.html',
//   styleUrl: './add-question-form.component.scss',
// })
// export class AddQuestionFormComponent {
//   newQtext = '';
//   newAnswers = ['', '', '', ''];
//   correctIdx = 0;

//   constructor(private readonly questionsService: QuestionsService) {}
//   save() {
//     const q = new Question(this.newQtext, [...this.newAnswers], this.correctIdx);
    
//     this.questionsService.addQuestion(q);
    
//     this.newQtext = '';
//     this.newAnswers = ['', '', '', ''];
//     this.correctIdx = 0;
//   }
// }





import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from '../shared/question';
import { QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-add-question-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-question-form.component.html',
  styleUrl: './add-question-form.component.scss',
})
export class AddQuestionFormComponent {
  newQtext: string = '';
  newAnswers: string[] = ['', '', '', ''];
  correctIdx: number = 0;

  constructor(private readonly questionsService: QuestionsService) {}

  save() {
    const filteredAnswers = this.newAnswers.filter(a => a.trim() !== '');

    if (this.newQtext.trim() === '' || filteredAnswers.length < 2) {
      alert('נא להזין שאלה ולפחות שתי תשובות');
      return;
    }

    // 2. יצירת האובייקט לפי המבנה המדויק שהשרת דורש
    const questionToSave = {
      question: this.newQtext,
      answers: filteredAnswers,
      correctAnswer: Number(this.correctIdx) // ודואגים שזה מספר
    };

    // 3. שליחה לסרוויס (הוא כבר יבצע את ה-POST ל-API)
    this.questionsService.addQuestion(questionToSave as any);
    
    // 4. איפוס הטופס לאחר שליחה
    this.resetForm();
  }

  private resetForm() {
    this.newQtext = '';
    this.newAnswers = ['', '', '', ''];
    this.correctIdx = 0;
  }
}