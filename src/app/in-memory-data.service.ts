import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions = [
      {id: 1, question: "what is", options: ["none", "this is", "null"], correctAnswer:"this is", distractors: ["none", "null"]},
      {id: 1, question: "Which place does not belong in South  Africa", options: ["JHB", "CPT", "Harare"], correctAnswer:"Harare", distractors: ["JHB", "CPT"]},
      {id: 1, question: "Whi is the first democratinc president of RSA", options: ["Mandela", "Mbeki", "Zuma"], correctAnswer:"Mandela", distractors: ["Mbeki", "Zuma"]},
      {id: 1, question: "Is Eskom part of RSA", options: ["No", "Yes"], correctAnswer:"Yes", distractors: ["no"]},
      {id: 1, question: "Which animal is not found in RSA", options: ["Lion", "Rhino", "Anaconda"], correctAnswer:"Anaconda", distractors: ["Lion", "Rhino"]},
      {id: 1, question: "How many official languges in RSA", options: ["19", "2", "11"], correctAnswer:"11", distractors: ["19", "2"]},
      {id: 1, question: "How many provinces in RSA", options: ["5", "9", "26"], correctAnswer:"9", distractors: ["5", "26"]},
      {id: 1, question: "How many legs does people have", options: ["3", "2", "7"], correctAnswer:"2", distractors: ["3", "7"]},
    ];
    return {questions};
  }
  genId(questions: Question[]): number {
    return questions.length > 0 ? Math.max(...questions.map(question => question.id)) + 1 : 11;
  }
}
