import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionsUrl = 'api/questions';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }
  getRandomQuestion(): Observable<Question> {
    return this.http.get<Question[]>(this.questionsUrl).pipe(
      map(questions => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
      }),
    );
  }
  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.questionsUrl, question, this.httpOptions);
  }
  deleteQuestion(id: string): Observable<Question> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.delete<Question>(url, this.httpOptions);
  }
  updateQuestion(question: Question): Observable<any> {
    return this.http.put(this.questionsUrl, question, this.httpOptions);
  }
}
