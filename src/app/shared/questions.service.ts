import { Injectable, signal, WritableSignal, Signal } from '@angular/core'; // ודאי שייבאת את signal
import { Question } from '../shared/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private _questions: WritableSignal<Question[]> = signal([]);

  constructor() {
    this._questions.set([
      new Question('What is Angular?', ['Library', 'Framework', 'Language'], 1),
      new Question('Is TypeScript cool?', ['Yes', 'No', 'Maybe'], 0)
    ]);
  }

  get questions(): Signal<Question[]> {
    return this._questions.asReadonly();
  }

  addQuestion(newQ: Question) {
    this._questions.update(prev => [...prev, newQ]);
  }
}