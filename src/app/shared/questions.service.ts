// import { Injectable, signal, WritableSignal, Signal } from '@angular/core'; // ודאי שייבאת את signal
// import { Question } from '../shared/question';

// @Injectable({
//   providedIn: 'root'
// })
// export class QuestionsService {

//   private _questions: WritableSignal<Question[]> = signal([]);

//   constructor() {
//     // this._questions.set([
//     //   new Question('What is Angular?', ['Library', 'Framework', 'Language'], 1),
//     //   new Question('Is TypeScript cool?', ['Yes', 'No', 'Maybe'], 0)
//     // ]);
//   }

//   get questions(): Signal<Question[]> {
//     return this._questions.asReadonly();
//   }

//   addQuestion(newQ: Question) {
//     this._questions.update(prev => [...prev, newQ]);
//   }
// }



import { Injectable, signal, WritableSignal, Signal, inject } from '@angular/core';
import { Question } from '../shared/question';
import { QuestionsAPIService } from './questions-api.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private _questions: WritableSignal<Question[]> = signal([]);
  private api = inject(QuestionsAPIService); 

  constructor() {
    this.loadInitialData();
  }

  private loadInitialData() {
    this.api.getAllQuestions().subscribe(data => this._questions.set(data));
  }

  get questions(): Signal<Question[]> {
    return this._questions.asReadonly();
  }

  addQuestion(newQ: Question) {
    this.api.addQuestion(newQ).subscribe({
      next: (savedQ) => {
        this._questions.update(prev => [...prev, savedQ]);
      },
      error: (err) => console.error('שגיאה בשמירה:', err)
    });
  }
}
