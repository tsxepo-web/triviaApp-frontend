import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  newQuestion: Question = {
    id: '',
    question: '',
    options: [],
    correctAnswer: '',
    distractors: []
  };

  constructor() { }
  
  updateNewQuestion(newQuestion: Question): void {
    this.newQuestion = { ...newQuestion };
  }
}
