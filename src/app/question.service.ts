import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionsUrl = 'https://triviabackend.azurewebsites.net/api/Trivia';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }
  getRandomQuestion(): Observable<Question> {
    const url = `${this.questionsUrl}/random`
    return this.http.get<Question>(url).pipe(
      map(question => {
        return question;
      }),
    );
  }
  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.questionsUrl, question, this.httpOptions);
  }
  deleteQuestion(question: string): Observable<Question> {
    const url = `${this.questionsUrl}/${question}`;
    return this.http.delete<Question>(url, this.httpOptions);
  }
  updateQuestion(question: Question): Observable<any> {
    const url = `${this.questionsUrl}/${question.id}`
    return this.http.put(url, question, this.httpOptions);
  }
}
