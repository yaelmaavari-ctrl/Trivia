import { Component } from '@angular/core';
import { Question } from './shared/question';
import { TestComponent } from './test/test.component';
import { AddQuestionFormComponent } from './add-question-form/add-question-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent, AddQuestionFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  questionsList: Question[] = [
    new Question('מהי בירת ישראל?', ['ירושלים', 'תל אביב', 'חיפה', 'צפת'], 0),
    new Question('כמה ימים יש בשבוע?', ['5', '6', '7', '8'], 2)]
 
  addNewQuestionToList(newQuest: Question) {
    console.log('השאלה הגיעה לאבא:', newQuest);
    this.questionsList = [...this.questionsList, newQuest];
  
  }
}