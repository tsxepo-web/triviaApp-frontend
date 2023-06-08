import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { v4 as uuidv4 } from 'uuid';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions: Question[] = [
      {id: uuidv4(), question: "what is", options: ["none", "this is", "null"], correctAnswer:"this is", distractors: ["none", "null"]},
      {id: uuidv4(), question: "Which place does not belong in South Africa", options: ["JHB", "CPT", "Harare"], correctAnswer:"Harare", distractors: ["JHB", "CPT"]},
      {id: uuidv4(), question: "Who is the first democratic president of RSA", options: ["Mandela", "Mbeki", "Zuma"], correctAnswer:"Mandela", distractors: ["Mbeki", "Zuma"]},
      {id: uuidv4(), question: "Is Eskom part of RSA", options: ["No", "Yes"], correctAnswer:"Yes", distractors: ["no"]},
      {id: uuidv4(), question: "Which animal is not found in RSA", options: ["Lion", "Rhino", "Anaconda"], correctAnswer:"Anaconda", distractors: ["Lion", "Rhino"]},
      {id: uuidv4(), question: "How many official languages in RSA", options: ["19", "2", "11"], correctAnswer:"11", distractors: ["19", "2"]},
      {id: uuidv4(), question: "How many provinces in RSA", options: ["5", "9", "26"], correctAnswer:"9", distractors: ["5", "26"]},
      {id: uuidv4(), question: "How many legs do people have", options: ["3", "2", "7"], correctAnswer:"2", distractors: ["3", "7"]},
    ];
    return { questions };
  }

  genId(questions: Question[]): string {
    return uuidv4();
  }
}
