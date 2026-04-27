import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../shared/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionsAPIService {
  private readonly baseURL = 'https://adi-teacher-api.onrender.com/quizzes?user=yael_maavari';

  private readonly http = inject(HttpClient);

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.baseURL);
  }

  addQuestion(q: Question): Observable<Question> {
    return this.http.post<Question>(this.baseURL, q);
  }
}
