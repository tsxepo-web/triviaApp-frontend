import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss']
})
export class QuestionManagementComponent implements OnInit {
  questions: Question[] = [];
  newQuestion: Question = {
    id: '',
    question: 'what is your question',
    options: ['opt1', 'opt2', 'op3'],
    correctAnswer: 'opt1',
    distractors: ['opt2', 'opt3']
  };
  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
    .subscribe(questions => this.questions = questions);
  }
  add(): void {
    this.questionService.addQuestion(this.newQuestion)
      .subscribe(question => 
        { this.questions.push(question)});
  }
  delete(question: Question): void {
    this.questions = this.questions.filter(x => x !== question);
    this.questionService.deleteQuestion(question.question).subscribe();
  }
  edit(question: Question): void {
    this.newQuestion = { ...question };
  }
}
